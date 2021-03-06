import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiConfigProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiConfigProvider Provider');
  }

  getApiKey2() {
    return new Promise((resolve, reject) => {
      this.http.get('../assets/data/api_key.json').subscribe(data => {
        resolve((data as any).api_key);
      });
    })
  }

}
