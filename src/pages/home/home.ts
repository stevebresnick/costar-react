import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { ConfigureModal } from '../modal/modal';
import { ArticlePage } from '../article/article';

import { ArticleService } from '../../services/article/article';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private articleService: ArticleService, private modalCtrl: ModalController, private navCtrl: NavController ) {
    this.articleService = articleService;
  }

  openModal() {
    let configureModal = this.modalCtrl.create(ConfigureModal);
    configureModal.present();
  }

  openArticle(article) {
    this.navCtrl.push(ArticlePage, { article: article });
  }

}
