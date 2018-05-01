import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-nearby-shop',
  templateUrl: './nearby-shop.component.html',
  styleUrls: ['./nearby-shop.component.css']
})
export class NearbyShopComponent implements OnInit {

  constructor(private actionService : ActionService) { }

  ngOnInit() {
  }
  @Input() nearbyShop : any

  url : String;

  like(shop_id : number ){
    this.actionService.like(shop_id);
  }

  dislike(shop_id : number ){
    this.actionService.like(shop_id);
  }
}
