import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {AppConstants} from '../../app.constants';

@Injectable()
export class SuggestionsService {

  URL: string;

  constructor(
    private http: Http
  ) {
    this.URL = AppConstants.apiURL;
  }

  /*
  * Get results from the API in the form of json when user Searches.
  * It reduces call to the API on typing each letter by having a gap of 300ms (default) between each calls.
   */
  search(term: Observable<string>) {
    return term
      .debounceTime(AppConstants.debounceTime || 300)
      .distinctUntilChanged()
      .switchMap((d) => {
      return this.http
        .get(this.URL)
        .map(result => {
          return result.json().products;
        });
    });
  }

}
