import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http:HttpClient) {
  }

  getShips() {
    return this.http.get('https://swapi.dev/api/starships/');
  }

  lazyLoadShips(response) {
    console.log("lazyLoadShips", response)
    return this.http.get(response.next);
  }

}
