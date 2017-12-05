import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class ArticleService {

  public articles = [];

  public likes = [];

  private ws;

  constructor(private alertCtrl: AlertController) {
    this.connect();
  }

  connect() {
    if (this.ws) {
      this.ws.close();
    }
    this.ws = new WebSocket('ws://' + location.host + '/_socket');
    let self = this;
    this.ws.onmessage = function (event) {
      console.log('Websocket message received.');
      self.articles = JSON.parse(event.data);
    };
    this.ws.onclose = function (event) {
      if (event.code !== 1000) {
        let alert = self.alertCtrl.create({
          message: 'Connection to server lost, check your URL setting.'
        });
        alert.present();
      }
    }
  }

  getLikedArticles () {
    let articles = [];
    for (let i in this.articles) {
      if (this.likes[this.articles[i].id]) {
        articles.push(this.articles[i]);
      }
    }
    return articles;
  }

}
