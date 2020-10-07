import { Injectable } from '@angular/core';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class ShipsLocalStorageService {

  cache: Object = {
    lastRequest: {},
    cache: [],
    expiresAt: null
  };

  constructor() { }

  getCache() {
    if (!localStorage.cache) {
      localStorage.cache = JSON.stringify(this.cache);
    }
    return this.isValidCache(JSON.parse(localStorage.cache)) ? JSON.parse(localStorage.cache) : this.cache;
  }

  setCache(cache) {
    if (!cache['expiresAt']) {
      cache['expiresAt'] = moment().add(5, 'm').toDate();
    }
    localStorage.cache = JSON.stringify(cache);
  }

  isValidCache(cache) {
    return (cache && cache['expiresAt']) ? moment().isBefore(moment(cache['expiresAt'])) : false;
  }
}
