import { Recipe } from './../../shared/recipe';
import { RecipeProvider } from './../../providers/recipe/recipe';
import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, PopoverController, ModalController, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the RecipedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipedetail',
  templateUrl: 'recipedetail.html',
})
export class RecipedetailPage {
  recipe:Recipe;
  errMess: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    @Inject('BaseURL') private BaseURL,
  private toastCtrl:ToastController,
  private popoverCtrl:PopoverController,
  private modalCtrl: ModalController,
  private actionSheetCtrl: ActionSheetController) {
    this.recipe = navParams.get('recipe');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipedetailPage');
  }

}
