import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipedetailPage } from './recipedetail';

@NgModule({
  declarations: [
    RecipedetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipedetailPage),
  ],
})
export class RecipedetailPageModule {}
