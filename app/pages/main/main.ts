import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  template:`
  <ion-header>
    <ion-navbar>
      <ion-title>Main</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content padding class="main">
    Main Content
  </ion-content>
  `
})
export class MainPage {
  constructor(private navController: NavController) {

  }
}
