webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_article_article__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticlePage = (function () {
    function ArticlePage(navParams, articleService) {
        this.navParams = navParams;
        this.articleService = articleService;
        this.article = this.navParams.get('article');
    }
    ArticlePage.prototype.like = function () {
        if (this.articleService.likes[this.article.id]) {
            delete this.articleService.likes[this.article.id];
        }
        else {
            this.articleService.likes[this.article.id] = true;
        }
    };
    return ArticlePage;
}());
ArticlePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-article',template:/*ion-inline-start:"/Users/stephen.bresnick/Desktop/webdev/react/obioinspiration/src/pages/article/article.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title [innerHtml]="article.title">\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="like()" class="like-button" [ngClass]="{\'active\': articleService.likes[this.article.id]}">\n        <ion-icon name="heart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col>\n        <img src="{{ article.image }}">\n        <h1 [innerHtml]="article.title"></h1>\n        <ion-list>\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="{{ article.author_picture }}">\n            </ion-avatar>\n            <h2>{{ article.author_first_name }} {{ article.author_last_name }}</h2>\n            <p>{{ article.published_on }}</p>\n          </ion-item>\n        </ion-list>\n        <p [innerHTML]="article.text | absoluteurl"></p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/stephen.bresnick/Desktop/webdev/react/obioinspiration/src/pages/article/article.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_article_article__["a" /* ArticleService */]])
], ArticlePage);

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__likes_likes__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discover_discover__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__likes_likes__["a" /* LikesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__discover_discover__["a" /* DiscoverPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/stephen.bresnick/Desktop/webdev/react/obioinspiration/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="{{ \'HOME\' | translate }} " tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="{{ \'LIKES\' | translate }} " tabIcon="heart"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="{{ \'DISCOVER\' | translate }} " tabIcon="happy"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/stephen.bresnick/Desktop/webdev/react/obioinspiration/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_article__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_article_article__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LikesPage = (function () {
    function LikesPage(articleService, navCtrl) {
        this.articleService = articleService;
        this.navCtrl = navCtrl;
        this.articleService = articleService;
    }
    LikesPage.prototype.openArticle = function (article) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__article_article__["a" /* ArticlePage */], { article: article });
    };
    return LikesPage;
}());
LikesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-likes',template:/*ion-inline-start:"/Users/stephen.bresnick/Desktop/webdev/react/obioinspiration/src/pages/likes/likes.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{ \'LIKES\' | translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row *ngIf="articleService.getLikedArticles().length === 0">\n      <ion-col col-12>\n        <p>{{ \'NO_LIKES\' | translate }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 *ngFor="let article of articleService.getLikedArticles()">\n        <ion-card (click)="openArticle(article)">\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="{{ article.author_picture }}">\n            </ion-avatar>\n            <h2 [innerHTML]="article.title"></h2>\n            <p>{{ article.author_first_name }} {{ article.author_last_name }}</p>\n          </ion-item>\n          <img src="{{ article.image }}">\n          <ion-card-content>\n            <p [innerHTML]="article.summary"></p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/stephen.bresnick/Desktop/webdev/react/obioinspiration/src/pages/likes/likes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_article_article__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], LikesPage);

//# sourceMappingURL=likes.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DiscoverPage = (function () {
    function DiscoverPage(formBuilder, http, alertCtrl, translate, loadingCtrl) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        this.discover = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            mail: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(emailRegex)]],
            field_company: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            message: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
        });
    }
    DiscoverPage.prototype.submitForm = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var data = {
            contact_form: [{ target_id: 'discover' }],
            subject: [{ value: 'Mobile form submission for ' + this.discover.get('mail').value }]
        };
        for (var i in this.discover.controls) {
            data[i] = [{ value: this.discover.get(i).value }];
        }
        var request = this.http.post('/contact_message', data);
        request.subscribe(function (response) {
            if (response.status === 200) {
                loading.dismiss();
                _this.discover.reset();
                var alert_1 = _this.alertCtrl.create({
                    title: _this.translate.instant('DISCOVER_CONFIRM_HEADER'),
                    message: _this.translate.instant('DISCOVER_CONFIRM_PROMPT')
                });
                alert_1.present();
            }
        });
    };
    return DiscoverPage;
}());
DiscoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-discover',template:/*ion-inline-start:"/Users/stephen.bresnick/Desktop/webdev/react/obioinspiration/src/pages/discover/discover.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{ \'DISCOVER\' | translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="submitForm()" [formGroup]="discover" padding>\n    <h2>{{ \'DISCOVER_HEADING\' | translate }}</h2>\n    <p>{{ \'DISCOVER_PROMPT\' | translate }}</p>\n    <ion-list>\n      <ion-item>\n        <ion-label>{{ \'NAME_LABEL\' | translate }}</ion-label>\n        <ion-input type="text" name="name" formControlName="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'EMAIL_LABEL\' | translate }}</ion-label>\n        <ion-input type="text" name="mail" formControlName="mail"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'COMPANY_LABEL\' | translate }}</ion-label>\n        <ion-input type="text" name="field_company" formControlName="field_company"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'MESSAGE_LABEL\' | translate }}</ion-label>\n        <ion-textarea type="text" name="message" formControlName="message"></ion-textarea>\n      </ion-item>\n    </ion-list>\n    <button ion-button color="primary" type="submit" block [disabled]="!discover.valid">{{ \'DISCOVER_BUTTON\' | translate }}</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/stephen.bresnick/Desktop/webdev/react/obioinspiration/src/pages/discover/discover.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */]])
], DiscoverPage);

//# sourceMappingURL=discover.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article_article__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_article_article__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(articleService, modalCtrl, navCtrl) {
        this.articleService = articleService;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.articleService = articleService;
    }
    HomePage.prototype.openModal = function () {
        var configureModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ConfigureModal */]);
        configureModal.present();
    };
    HomePage.prototype.openArticle = function (article) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__article_article__["a" /* ArticlePage */], { article: article });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/stephen.bresnick/Desktop/webdev/react/obioinspiration/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'HOME\' | translate }}</ion-title>\n    <ion-buttons end>\n    <button ion-button icon-only (click)="openModal()" class="language-button">\n      <ion-icon name="globe"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 *ngFor="let article of articleService.articles">\n        <ion-card (click)="openArticle(article)">\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="{{ article.author_picture }}">\n            </ion-avatar>\n            <h2 [innerHTML]="article.title"></h2>\n            <p>{{ article.author_first_name }} {{ article.author_last_name }} {{ article.published_on }}</p>\n          </ion-item>\n          <img src="{{ article.image }}">\n          <ion-card-content>\n            <p [innerHTML]="article.summary"></p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/stephen.bresnick/Desktop/webdev/react/obioinspiration/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_article_article__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigureModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_article_article__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_pwa_pwa__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfigureModal = (function () {
    function ConfigureModal(articleService, viewCtrl, formBuilder, translate, cookies, pwa) {
        this.articleService = articleService;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.cookies = cookies;
        this.pwa = pwa;
        this.configure = this.formBuilder.group({
            langcode: [this.cookies.get('langcode') || 'en', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            url: [this.cookies.get('url') || '', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^(https?):\/\/[^ "\/]+$/)]],
            toggle: [false]
        });
    }
    ConfigureModal.prototype.submitForm = function () {
        var langcode = this.configure.get('langcode').value;
        var url = this.configure.get('url').value.replace(/\/$/, '');
        var expires = new Date();
        expires.setDate(expires.getDate() + 100);
        this.cookies.put('url', url, { expires: expires });
        this.cookies.put('langcode', langcode, { expires: expires });
        this.translate.setDefaultLang(langcode);
        this.articleService.connect();
        this.pwa.init();
        this.viewCtrl.dismiss();
    };
    return ConfigureModal;
}());
ConfigureModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'configure-modal',template:/*ion-inline-start:"/Users/stephen.bresnick/Desktop/webdev/react/obioinspiration/src/pages/modal/modal.html"*/'<ion-content>\n  <ion-toolbar>\n    <ion-title>{{ \'CHANGE_LANGUAGE\' | translate }}</ion-title>\n  </ion-toolbar>\n  <form (ngSubmit)="submitForm()" [formGroup]="configure" padding>\n    <ion-list>\n      <ion-item>\n        <ion-label>{{ \'LANGUAGE\' | translate }}</ion-label>\n        <ion-select name="langcode" formControlName="langcode">\n          <ion-option value="en">English</ion-option>\n          <ion-option value="es">Español</ion-option>\n          <ion-option value="fr">Français</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'ADVANCED\' | translate }}</ion-label>\n        <ion-toggle checked="false" formControlName="toggle"></ion-toggle>\n      </ion-item>\n      <ion-item [hidden]="!configure.value.toggle">\n        <ion-label>Site URL</ion-label>\n        <ion-input type="text" name="url" title="Site URL" formControlName="url"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button color="primary" type="submit" block [disabled]="!configure.valid">{{ \'SAVE\' | translate }}</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/stephen.bresnick/Desktop/webdev/react/obioinspiration/src/pages/modal/modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_article_article__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["b" /* CookieService */], __WEBPACK_IMPORTED_MODULE_6__services_pwa_pwa__["a" /* PWAService */]])
], ConfigureModal);

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PWAService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PWAService = (function () {
    function PWAService(http) {
        this.http = http;
    }
    PWAService.prototype.init = function () {
        var _this = this;
        var request = this.http.get('/api/site_info');
        request.subscribe(function (response) {
            var data = response.json();
            if (response.status === 200 && data) {
                document.getElementById('pwa-icon');
                var icon = document.querySelector('link[rel="icon"]');
                var apple_icon = document.querySelector('link[rel="apple-touch-icon"]');
                icon.href = apple_icon.href = _this.getIconForText(data.site_name, data.theme_palette.link);
            }
        });
        return request;
    };
    PWAService.prototype.getIconForText = function (text, color) {
        var canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        var ctx = canvas.getContext('2d');
        ctx.font = 'bold 450px Helvetica';
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.shadowColor = 'black';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 10;
        ctx.fillText(text[0], 256, 400);
        return canvas.toDataURL();
    };
    return PWAService;
}());
PWAService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], PWAService);

//# sourceMappingURL=pwa.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_cookie__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_likes_likes__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_discover_discover__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modal_modal__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_article_article__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_pwa_pwa__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_article_article__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_absoluteurl_pipe__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_likes_likes__["a" /* LikesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_discover_discover__["a" /* DiscoverPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_modal_modal__["a" /* ConfigureModal */],
            __WEBPACK_IMPORTED_MODULE_15__pages_article_article__["a" /* ArticlePage */],
            __WEBPACK_IMPORTED_MODULE_18__pipes_absoluteurl_pipe__["a" /* AbsoluteURLPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                locationStrategy: 'path'
            }),
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_9_ngx_cookie__["a" /* CookieModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_likes_likes__["a" /* LikesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_discover_discover__["a" /* DiscoverPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_modal_modal__["a" /* ConfigureModal */],
            __WEBPACK_IMPORTED_MODULE_15__pages_article_article__["a" /* ArticlePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__services_pwa_pwa__["a" /* PWAService */],
            __WEBPACK_IMPORTED_MODULE_17__services_article_article__["a" /* ArticleService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_cookie__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translate, cookies) {
        this.translate = translate;
        this.cookies = cookies;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.translate.setDefaultLang(this.cookies.get('langcode') || 'en');
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/stephen.bresnick/Desktop/webdev/react/obioinspiration/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/stephen.bresnick/Desktop/webdev/react/obioinspiration/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6_ngx_cookie__["b" /* CookieService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsoluteURLPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbsoluteURLPipe = (function () {
    function AbsoluteURLPipe(cookies) {
        this.cookies = cookies;
    }
    AbsoluteURLPipe.prototype.transform = function (value, args) {
        if (!value || !this.cookies.get('url'))
            return value;
        return value.replace(/(href=\"|src=\")(\/[^"]*)/g, '$1' + this.cookies.get('url') + '$2');
    };
    return AbsoluteURLPipe;
}());
AbsoluteURLPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'absoluteurl' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie__["b" /* CookieService */]])
], AbsoluteURLPipe);

//# sourceMappingURL=absoluteurl.pipe.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleService = (function () {
    function ArticleService(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.articles = [];
        this.likes = [];
        this.connect();
    }
    ArticleService.prototype.connect = function () {
        if (this.ws) {
            this.ws.close();
        }
        this.ws = new WebSocket('ws://' + location.host + '/_socket');
        var self = this;
        this.ws.onmessage = function (event) {
            console.log('Websocket message received.');
            self.articles = JSON.parse(event.data);
        };
        this.ws.onclose = function (event) {
            if (event.code !== 1000) {
                var alert_1 = self.alertCtrl.create({
                    message: 'Connection to server lost, check your URL setting.'
                });
                alert_1.present();
            }
        };
    };
    ArticleService.prototype.getLikedArticles = function () {
        var articles = [];
        for (var i in this.articles) {
            if (this.likes[this.articles[i].id]) {
                articles.push(this.articles[i]);
            }
        }
        return articles;
    };
    return ArticleService;
}());
ArticleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ArticleService);

//# sourceMappingURL=article.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map