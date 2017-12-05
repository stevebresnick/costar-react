# Obio Inspiration
An Ionic 2 application for the Obio demo, showing off how a headless site can
consume Drupal data in a native mobile interface.

Now that Acquia Cloud can host Node.js applications, we take advantage of two
features that may become common for customer implementations:

1. Proxying requests to Drupal - the client has no awareness of the Drupal
backend and routes all traffic through a Node.js express server.
1. Using websockets to update client data - every few seconds the Node.js
server makes a request to Drupal to fetch the latest articles from a View. Once
fetched, the data is sent to all connected clients at the same time. This
reduces the number of hits to Drupal and Node.js, as there will only be one
Drupal hit for each unique path, instead of one per client. 

# Installation
1. Install the Obio scenario somewhere
1. Ensure that the latest Node (8+) and NPM (5+) are installed
1. Run `sudo npm install -g ionic@latest`
1. Run `npm install`
1. Run `ionic build`
1. Run `node index.js`. To use an specific port, run `node index.js --port <port>`.
1. Visit `localhost:8080`
1. You're done!

# Use
1. Click on the globe icon in the top bar
1. Toggle "Advanced"
1. Enter the HTTPS URL of your Obio installation
1. That's it!

For more information please read through [the Confluence documentation]( https://confluence.acquia.com/display/DF/Using+the+Obio+Inspiration+mobile+app ).
