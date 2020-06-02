import { Recipe } from './../../shared/recipe';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
/*
  Generated class for the RecipeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipeProvider {
  constructor(public http: Http,
    private processHTTPMsgService: ProcessHttpmsgProvider) { }

getrecipes(): Observable<Recipe[]> {
return this.http.get(baseURL + 'api/recipes')
          .map(res => { return this.processHTTPMsgService.extractData(res); })
          .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

getRecipe(id: number): Observable<Recipe> {
return  this.http.get(baseURL + 'api/recipes/'+ id)
          .map(res => { return this.processHTTPMsgService.extractData(res); })
          .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

getActiveRecipe(): Observable<Recipe> {
return this.http.get(baseURL + 'api/recipes?active=true')
          .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
          .catch(error => { return this.processHTTPMsgService.handleError(error); });
}
getmesomorphRecipe(): Observable<Recipe[]> {
  return this.http.get(baseURL + 'api/recipes?target=mesomorph')
            .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
            .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getendomorphRecipe(): Observable<Recipe[]> {
    return this.http.get(baseURL + 'api/recipes?target=endomorph')
              .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
              .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

    getectomorphRecipe(): Observable<Recipe[]> {
      return this.http.get(baseURL + 'api/recipes?target=ectomorph')
                .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
                .catch(error => { return this.processHTTPMsgService.handleError(error); });
      }

}
