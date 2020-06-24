import { TrackPage } from './../pages/track/track';

import { User } from './../shared/user';

import { Storage } from '@ionic/storage';
import { LoginPage } from './../pages/login/login';
import { WorkoutPage } from './../pages/workout/workout';
import { RecipesPage } from './../pages/recipes/recipes';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { CustommealplanPage } from '../pages/custommealplan/custommealplan';
import { Chat } from '../pages/chat/chat';


@Component({
  selector: 'menu-selector',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
user:User;

  pages: Array<{title: string, icon: string, component: any}>;
loggedIn:any;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl:ModalController, private storage:Storage) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon: 'message.png', component: HomePage },
      { title: 'Our Recipes', icon: 'message.png' ,component: RecipesPage },
      { title: 'Customized workouts',  icon: 'message.png',component: WorkoutPage },
      { title: 'Customized meal plan', icon: 'message.png', component: CustommealplanPage },
    ];
    storage.get('user').then((val) => {


      console.log('Your name is', val.username);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  openLogin() {
    let modal = this.modalCtrl.create( LoginPage);
    modal.present();
  }
  openChat() {
    let modal = this.modalCtrl.create( Chat);
    modal.present();
  }
  openRecipes() {
    this.nav.push(RecipesPage)
  }
  openCustomMealPlans() {
    this.nav.push(CustommealplanPage)
  }
  openCustomWorkoutplan() {
    this.nav.push(WorkoutPage)
  }

  openTrackUser() {
    this.nav.push(TrackPage)
  }
  checkLoggedIn(){
    if(this.storage.get('user') === null){
      this.loggedIn=false;
  } else {
    this.loggedIn=true;
  }
  }

}
