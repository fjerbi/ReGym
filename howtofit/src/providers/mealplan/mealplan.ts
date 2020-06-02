import { Mealplan } from './../../shared/Mealplan';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
/*
/*
  Generated class for the MealplanProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MealplanProvider {

  constructor(public http: Http,
    private processHTTPMsgService: ProcessHttpmsgProvider) { }



      getmesomorphMealplan(): Observable<Mealplan[]> {
        return this.http.get(baseURL + 'api/mealplans/mealplanmesomorph')
                  .map(res => { return this.processHTTPMsgService.extractData(res); })
                  .catch(error => { return this.processHTTPMsgService.handleError(error); });
        }

      getendomorphMealplan(): Observable<Mealplan[]> {
        return this.http.get(baseURL + 'api/mealplans?target=endomorph')
                  .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
                  .catch(error => { return this.processHTTPMsgService.handleError(error); });
        }

        getectomorphMealplan(): Observable<Mealplan[]> {
          return this.http.get(baseURL + 'api/mealplanmesomorph?target=ectomorph')
                    .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
                    .catch(error => { return this.processHTTPMsgService.handleError(error); });
          }


}
