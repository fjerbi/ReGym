import { CustommealplandetailPage } from './../pages/custommealplandetail/custommealplandetail';
import { EndomorphmealplanPage } from './../pages/endomorphmealplan/endomorphmealplan';
import { EcotmorphmealplanPage } from './../pages/ecotmorphmealplan/ecotmorphmealplan';
import { MesomorphmealplanPage } from './../pages/mesomorphmealplan/mesomorphmealplan';
import { CustommealplanPage } from './../pages/custommealplan/custommealplan';
import { RecipedetailPage } from './../pages/recipedetail/recipedetail';
import { WorkoutPage } from './../pages/workout/workout';
import { RecipesPage } from './../pages/recipes/recipes';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RecipeProvider } from '../providers/recipe/recipe';
import { WorkoutProvider } from '../providers/workout/workout';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { HttpModule } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { MealplanProvider } from '../providers/mealplan/mealplan';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CartProvider } from '../providers/cart/cart';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RecipesPage,
    WorkoutPage,
    RecipedetailPage,
    CustommealplanPage,
    MesomorphmealplanPage,
    EcotmorphmealplanPage,
    EndomorphmealplanPage,
    CustommealplandetailPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicImageViewerModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RecipesPage,
    WorkoutPage,
    RecipedetailPage,
    CustommealplanPage,
    MesomorphmealplanPage,
    EcotmorphmealplanPage,
    EndomorphmealplanPage,
    CustommealplandetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecipeProvider,
    WorkoutProvider,
    RecipeProvider,
    WorkoutProvider,
    ProcessHttpmsgProvider,
    { provide: 'BaseURL', useValue: baseURL },
    MealplanProvider,
    CartProvider
  ]
})
export class AppModule {}
