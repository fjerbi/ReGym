import { RecipedetailPage } from './../recipedetail/recipedetail';
import { RecipeProvider } from './../../providers/recipe/recipe';
import { Recipe } from './../../shared/recipe';
import { Component, Inject, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage implements OnInit{
  recipes: Recipe[];
  errMess:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private recipeservice:RecipeProvider,
    @Inject('BaseURL') private BaseURL ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }
  ngOnInit(): void {
    this.recipeservice.getrecipes()
    .subscribe(recipes =>this.recipes = recipes,
      errmess=>this.errMess=errmess);
  }

  recipeSelected(event, recipe){
    this.navCtrl.push(RecipedetailPage, {
      recipe:recipe
    });
  }

}
