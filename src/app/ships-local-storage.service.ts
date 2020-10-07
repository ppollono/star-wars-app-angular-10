import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShipsLocalStorageService {

  service: Object;
  cache: Object = {
    lastRequest: {},
    cache: []
  };

  constructor() { }


  getCache() {
    if(!localStorage.cache){
      localStorage.cache = JSON.stringify(this.cache);
    }
    return JSON.parse(localStorage.cache);
  }

  setCache(cache) {
    localStorage.cache = JSON.stringify(cache);
  }
}
