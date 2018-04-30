import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nearby-shop',
  templateUrl: './nearby-shop.component.html',
  styleUrls: ['./nearby-shop.component.css']
})
export class NearbyShopComponent implements OnInit {

  constructor( private http : HttpClient) { }

  ngOnInit() {
  }
  @Input() nearbyShop : any

  url : String;

  like(shop_id : number ){
       //user/:user_id/like/shops/:shop_id
       this.http.get("http://localhost:3000/v1/user/1/like/shops/"+shop_id)
    .subscribe(data => {
      console.log(data);
    });
  }
}
