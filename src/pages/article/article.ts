import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ArticleService } from '../../services/article/article';

@Component({
  selector: 'page-article',
  templateUrl: 'article.html'
})
export class ArticlePage {

  private article;

  constructor(public navParams: NavParams, private articleService: ArticleService) {
    this.article = this.navParams.get('article');
  }

  like() {
    if (this.articleService.likes[this.article.id]) {
      delete this.articleService.likes[this.article.id];
    }
    else {
      this.articleService.likes[this.article.id] = true;
    }
  }

}
