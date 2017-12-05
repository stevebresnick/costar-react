const WebSocket = require('ws');
const cookie = require('cookie');
const request = require('request-promise');
const argv = require('yargs').argv;
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const https = require('https');

// This looks a little crazy, as in Presales we need to support multiple users
// all using this one headless application on their sites. As a result, the URL
// for Drupal is configurable by the end user and set in a cookie.

// In a real implementation of this kind of server the Drupal URL would be
// hardcoded here, although I would keep most of the logic below the same. If
// we had Memcache or Redis support, I would implement a queue of outgoing
// Drupal requests instead of using setInterval. - Samuel Mortenson

// Proxy specific routes to Drupal.

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// This is a funny route we made to customize the look/feel of the app, it
// returns Drupal theme colors and the site config as JSON.
app.get('/api/site_info', function (req, res) {
  let cookies = cookie.parse(req.get('Cookie') || '');
  if (cookies.url) {
    request.get(cookies.url + '/site_api/site_info?_format=json')
    .then(function (json) {
      res.setHeader('Content-Type', 'application/json');
      res.send(json);
    })
    .catch(function (error) {
      res.status(500).send('Error when fetching site information: ' + error);
    });
  }
});

// The "Discover" form.
app.post('/contact_message', function (req, res) {
  let cookies = cookie.parse(req.get('Cookie') || '');
  if (cookies.url) {
    request.post({
      url: cookies.url + '/contact_message',
      body: req.body,
      json: true,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (json) {
      res.setHeader('Content-Type', 'application/json');
      res.send(json);
    })
    .catch(function (error) {
      res.status(500).send('Error when sending contact submission: ' + error);
    });
  }
});

// Serve the Ionic application as static files.
app.use(express.static(__dirname + '/www'));

const server = http.createServer(app);

// Use web sockets for fetching articles, to throttle and obscure Drupal hits.

const wss = new WebSocket.Server({
  'path': '/_socket',
  server
});

server.listen(argv['port'] || process.env.PORT || 8080);

let requests = {};
let responses = {};

function log(message) {
  console.log(new Date().toUTCString() + ' - ' + message);
}

function fetchArticles(base_url, langcode) {
  let langprefix = langcode === 'en' ? '' : '/' + langcode;
  let url = base_url + langprefix + '/api/mobile/all';
  log('Making request to ' + url);
  return request(url);
}

function sendArticleToClient(client) {
  let key = client.url + '_' + client.langcode;
  if (responses[key]) {
    client.send(responses[key]);
    return;
  }
  if (!requests[key] || (requests[key] && !requests[key].promise().isPending())) {
    requests[key] = fetchArticles(client.url, client.langcode);
  }
  requests[key].then(function (json) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(json);
      responses[key] = json;
    }
  });
  // We don't want to stay connected to client with an invalid Drupal site.
  requests[key].catch(function () {
    client.terminate();
  });
}

function broadcast() {
  responses = {};
  requests = {};
  wss.clients.forEach(function (client) {
    if (client.isAlive === false) return client.terminate();

    client.isAlive = false;
    client.ping('', false, true);

    sendArticleToClient(client);
  });
}

function validateCookies(cookies) {
  if (!cookies.url || !cookies.langcode) {
    return false;
  }
  return cookies.url.match(/^(https?):\/\/[^ "\/]+$/) && cookies.langcode.match(/^(en|fr|es)$/);
}

wss.on('connection', function connection(ws, req) {
  let cookies = cookie.parse(req.headers.cookie || '');
  if (validateCookies(cookies)) {
    ws.url = cookies.url;
    ws.langcode = cookies.langcode;
    sendArticleToClient(ws);
    // Heartbeat.
    ws.isAlive = true;
    ws.on('pong', function () {
      this.isAlive = true;
    });
    // Logging.
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    ws.on('close', function connection() {
      log('Websocket closed for ' + ip + '. ' + wss.clients.size + ' total clients.');
    });
    log('New websocket connection from ' + ip + '. ' + wss.clients.size + ' total clients.');
  }
  else {
    ws.terminate();
  }
});

setInterval(function () {
  broadcast();
}, 10000);

log('Server running');
