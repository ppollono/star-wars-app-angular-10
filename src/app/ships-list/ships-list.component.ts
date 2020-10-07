import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ShipsLocalStorageService } from '../ships-local-storage.service';

@Component({
  selector: 'app-ships-list',
  templateUrl: './ships-list.component.html',
  styleUrls: ['./ships-list.component.scss']
})
export class ShipsListComponent implements OnInit {

  response: Object;
  list: Array<any>;
  cache: Object;

  constructor(private _http: HttpService, private ShipsLocalStorage: ShipsLocalStorageService) { }

  ngOnInit(): void {
    this.cache = this.ShipsLocalStorage.getCache();
    if (this.cache['cache'].length === 0) {
      this.getShips();
    } else {
      this.response = this.cache['lastResponse'];
      this.list = this.cache['cache'];
      console.log("this.cache", this.cache)
    }
  }

  getShips(): void {
    this._http.getShips().subscribe(data => {
      if (data && data['results'].length) {
        this.response = data;
        this.list = data['results'];
      }
    });
  }

  getMoreShips(): void {
    if (!this.response['next']) return;
    this._http.lazyLoadShips(this.response).subscribe(data => {
      if (data && data['results'].length) {
        this.response = data;
        this.list = this.list.concat(data['results']);
        this.setCache(data, this.list)
      }
    });
  }

  setCache(response, list) {
    this.ShipsLocalStorage.setCache({
      lastResponse: response,
      cache: list
    });
  }
}
