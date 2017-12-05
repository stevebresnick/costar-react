import { Component } from '@angular/core';

import { LikesPage } from '../likes/likes';
import { DiscoverPage } from '../discover/discover';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LikesPage;
  tab3Root = DiscoverPage;

  constructor() {}

}
