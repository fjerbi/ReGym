import { Mealplan } from './../../shared/Mealplan';
import { MealplanProvider } from './../../providers/mealplan/mealplan';
import { RecipedetailPage } from './../recipedetail/recipedetail';
import { Component, Inject, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MesomorphmealplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mesomorphmealplan',
  templateUrl: 'mesomorphmealplan.html',
})
export class MesomorphmealplanPage implements OnInit {

  mealplans: Mealplan[];
  errMess:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private mealplanservice:MealplanProvider,
    @Inject('BaseURL') private BaseURL ) {
  }

  ngOnInit(): void {
    this.mealplanservice.getmesomorphMealplan()
    .subscribe(mealplans =>this.mealplans = mealplans,
      errmess=>this.errMess=errmess);
  }

  mealplanSelected(event, mealplan){
    this.navCtrl.push(RecipedetailPage, {
      mealplan:mealplan
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MesomorphmealplanPage');
  }

}
