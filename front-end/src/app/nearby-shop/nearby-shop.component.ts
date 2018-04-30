import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-nearby-shop',
  templateUrl: './nearby-shop.component.html',
  styleUrls: ['./nearby-shop.component.css']
})
export class NearbyShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() nearbyShop : any
}
