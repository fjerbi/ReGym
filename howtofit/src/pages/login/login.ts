import { RegisterPage } from './../register/register';
import { User } from './../../shared/user';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
loginForm: FormGroup;
user:User={username: '', password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController,
    private formBuilder:FormBuilder,
    private storage:Storage,
    private modalCtrl:ModalController) {

      this.loginForm = this.formBuilder.group({
username: ['', Validators.required],
password: ['' ,Validators.required],
remember: true
      });
      storage.get('user').then(user=> {
if(user){
  this.user= user;
  this.loginForm
  .patchValue({
    'username':this.user.username,
    'password': this.user.password
  })
}
else
console.log('user not defined')
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
dismiss(){
  this.viewCtrl.dismiss();
}

onSubmit(){
  this.user.username= this.loginForm.get('username').value;
  this.user.password= this.loginForm.get('password').value;
 //if the remember checkbox is tcked
  if(this.loginForm.get('remember').value)
    this.storage.set('user', this.user);
    else

     //if the remember checkbox is not ticked
    this.storage.remove('user');
    this.viewCtrl.dismiss();
  }
  openRegister() {
    let modal = this.modalCtrl.create(RegisterPage);
    modal.present();
    modal.onDidDismiss(() => this.dismiss())
  }

}

