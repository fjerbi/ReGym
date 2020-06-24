import { TrackPage } from './../pages/track/track';
import { Chat } from './../pages/chat/chat';
import { ChatService } from './../providers/chat-service/chat-service';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
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
import { PayPal } from '@ionic-native/paypal'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { TrackProvider } from '../providers/track/track';
import { Geolocation } from '@ionic-native/geolocation';

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
    CustommealplandetailPage,
    LoginPage,
    RegisterPage,
    Chat,
    TrackPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicImageViewerModule,
    Ng2SearchPipeModule,
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
    CustommealplandetailPage,
    LoginPage,
    RegisterPage,
    Chat,
    TrackPage
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
    CartProvider,
    AuthServiceProvider,
    ChatService,
    PayPal,
    TrackProvider,
    TrackProvider,
    Geolocation
  ]
})
export class AppModule {}
