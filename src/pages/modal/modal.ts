import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie';
import { ArticleService } from '../../services/article/article';
import { PWAService } from '../../services/pwa/pwa';

@Component({
selector: 'configure-modal',
templateUrl: 'modal.html'
})
export class ConfigureModal {

  private configure: FormGroup;

  constructor( private articleService: ArticleService, private viewCtrl: ViewController, private formBuilder: FormBuilder, private translate: TranslateService, private cookies: CookieService, private pwa: PWAService ) {
    this.configure = this.formBuilder.group({
      langcode: [this.cookies.get('langcode') || 'en', Validators.required],
      url: [this.cookies.get('url') || '', [Validators.required, Validators.pattern(/^(https?):\/\/[^ "\/]+$/)]],
      toggle: [false]
    });
  }

  submitForm() {
    let langcode = this.configure.get('langcode').value;
    let url = this.configure.get('url').value.replace(/\/$/, '');
    let expires = new Date();
    expires.setDate(expires.getDate() + 100);
    this.cookies.put('url', url, {expires: expires});
    this.cookies.put('langcode', langcode, {expires: expires});
    this.translate.setDefaultLang(langcode);
    this.articleService.connect();
    this.pwa.init();
    this.viewCtrl.dismiss();
  }

}
