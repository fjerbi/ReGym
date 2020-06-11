import { MealplanProvider } from './../mealplan/mealplan';
import { Mealplan } from './../../shared/Mealplan';
import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartProvider {
  itemsOnCart: Array<any>;

  constructor(public http: Http,
    private dishservice: MealplanProvider,
    private storage:Storage) {
    console.log('Hello FavoriteProvider Provider');
    storage.get('favorites').then(itemsOnCart => {
      if(itemsOnCart) {
        console.log("storage favorites",itemsOnCart);
        this.itemsOnCart = itemsOnCart;
      }
      else this.itemsOnCart = [];
    });
  }

  addFavorite(id: number):boolean{
    //checking if there is no other diplicates
    //in the favorite lists

    this.itemsOnCart.push(id);
    this.storage.set('itemsOnCart',this.itemsOnCart);
    console.log(this.itemsOnCart);
  return true;
  }

  isFavorite(id: number):boolean{
    //some check if specific dishe is in  the array or not
    return this.itemsOnCart.some(el => el===id);

  }

  getFavorites(): Observable<Mealplan[]>{
    return this.dishservice.getmealplans()
    //getting all dishes and filtering only dishes in my list of favorites
    .map(mealplans=> mealplans.filter(mealplan=>this.itemsOnCart.some(el=> el===mealplan.id)))
  }

  deleteFavorite(id: number): Observable<Mealplan[]>{

    let index = this.itemsOnCart.indexOf(id);
    if(index>=0){
this.itemsOnCart.splice(index,1);
return this.getFavorites();
    }
    else{
console.log('Deleting non existant favorite', id);
return Observable.throw('Deleting non existant favorite'+id);
    }
  }

}
