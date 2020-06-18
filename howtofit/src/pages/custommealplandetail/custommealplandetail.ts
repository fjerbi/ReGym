import { Mealplan } from './../../shared/Mealplan';
import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, PopoverController, ModalController, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the CustommealplandetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custommealplandetail',
  templateUrl: 'custommealplandetail.html',
})
export class CustommealplandetailPage {
  mealplan:Mealplan;
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    @Inject('BaseURL') private BaseURL,
  private toastCtrl:ToastController,
  private popoverCtrl:PopoverController,
  private modalCtrl: ModalController,
  private actionSheetCtrl: ActionSheetController) {
    this.mealplan = navParams.get('mealplan');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad custom meal detail');
  }

}
