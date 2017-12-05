import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CookieModule } from 'ngx-cookie';

import { LikesPage } from '../pages/likes/likes';
import { DiscoverPage } from '../pages/discover/discover';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ConfigureModal } from '../pages/modal/modal';
import { ArticlePage } from '../pages/article/article';
import { PWAService } from '../services/pwa/pwa';
import { ArticleService } from '../services/article/article';
import { AbsoluteURLPipe } from '../pipes/absoluteurl.pipe';

function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    LikesPage,
    DiscoverPage,
    HomePage,
    TabsPage,
    ConfigureModal,
    ArticlePage,
    AbsoluteURLPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      locationStrategy: 'path'
    }),
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    CookieModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LikesPage,
    DiscoverPage,
    HomePage,
    TabsPage,
    ConfigureModal,
    ArticlePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PWAService,
    ArticleService
  ]
})
export class AppModule {}
