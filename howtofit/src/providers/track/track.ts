import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the TrackProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrackProvider {

  constructor(public http: Http) {
    console.log('Hello TrackProvider Provider');
  }
  getCord(){
    return this.http.get('https://api.mapbox.com/directions/v5/mapbox/driving/88.4351902,22.5699671;88.463232,22.605186?steps=true&alternatives=true&access_token=pk.eyJ1Ijoic3Zyb2NrIiwiYSI6ImNqa3dvN3lqaDBsaXYzcHE1dTRpNDQ2eG8ifQ.-mFoBzZa3cM3abiQb3F2Pg')
  }

}
