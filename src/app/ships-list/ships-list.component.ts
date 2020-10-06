import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ships-list',
  templateUrl: './ships-list.component.html',
  styleUrls: ['./ships-list.component.scss']
})
export class ShipsListComponent implements OnInit {

  response: Object;
  list: Array<any>;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
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
      }
    });
  }
}
