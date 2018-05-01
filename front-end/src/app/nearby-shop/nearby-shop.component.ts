import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-nearby-shop',
  templateUrl: './nearby-shop.component.html',
  styleUrls: ['./nearby-shop.component.css']
})
export class NearbyShopComponent implements OnInit {

  constructor( private http : HttpClient, private actionService : ActionService) { }

  ngOnInit() {
  }
  @Input() nearbyShop : any

  url : String;

  like(shop_id : number ){
    this.actionService.like(shop_id);
  }

  dislike(shop_id : number ){
    //api : user/:user_id/dislike/shops/:shop_id
    this.http.get("http://localhost:3000/v1/user/1/dislike/shops/"+shop_id)
 .subscribe(data => {
   console.log(data);
 });
}
}
