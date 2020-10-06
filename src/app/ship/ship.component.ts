import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {

  shipId: Number;
  shipImageUrl: String;

  @Input() ship: any;

  constructor() { }

  setShipId(ship) {
    let url = ship.url;
    this.shipId = url.split("/").filter(function (item) {
        return item !== "";
    }).slice(-1)[0];
  }

  setShipImageUrl(id) {
    if (id) {
      this.shipImageUrl = 'https://starwars-visualguide.com/assets/img/starships/' + id  + '.jpg';
    }
  }

  ngOnInit(): void {
    this.setShipId(this.ship);
    this.setShipImageUrl(this.shipId)
  }
}
