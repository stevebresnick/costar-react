import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArticlePage } from '../article/article';
import { ArticleService } from '../../services/article/article';

@Component({
  selector: 'page-likes',
  templateUrl: 'likes.html'
})
export class LikesPage {

  constructor(private articleService: ArticleService, public navCtrl: NavController) {
    this.articleService = articleService;
  }

  openArticle(article) {
    this.navCtrl.push(ArticlePage, { article: article });
  }

}
