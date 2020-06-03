import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(public navCtrl: NavController) {

  }

}
