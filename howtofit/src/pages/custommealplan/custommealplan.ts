import { EcotmorphmealplanPage } from './../ecotmorphmealplan/ecotmorphmealplan';
import { EndomorphmealplanPage } from './../endomorphmealplan/endomorphmealplan';
import { MesomorphmealplanPage } from './../mesomorphmealplan/mesomorphmealplan';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustommealplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custommealplan',
  templateUrl: 'custommealplan.html',
})
export class CustommealplanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustommealplanPage');
  }
  mesomorphrecipeSelected(event, recipe){
    this.navCtrl.push(MesomorphmealplanPage, {
      recipe:recipe
    });
  }
  endomorphrecipeSelected(event, recipe){
    this.navCtrl.push(EndomorphmealplanPage, {
      recipe:recipe
    });
  }
  ectomorphrecipeSelected(event, recipe){
    this.navCtrl.push(EcotmorphmealplanPage, {
      recipe:recipe
    });
  }

}
