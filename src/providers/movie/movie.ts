import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigProvider } from '../api-config/api-config';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  baseApiPath = "";

  constructor(
    public http: HttpClient,
    private api_config: ApiConfigProvider
  ) {
    console.log('Hello MovieProvider Provider');
  }

  getLastestMovies() {

    return new Promise((resolve, reject) => {
      this.api_config.getApiKey2().then(api_key => {
        this.http.get(this.baseApiPath + "/movie/latest?api_key=" + api_key);
      })
    })

  }

}
