import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-preferred-shop',
  templateUrl: './preferred-shop.component.html',
  styleUrls: ['./preferred-shop.component.css']
})
export class PreferredShopComponent implements OnInit {

  constructor( private http : HttpClient) { }

  ngOnInit() {
  }
   @Input() preferredShop : any

   remove(shop_id : number ){
    //user/:user_id/like/shops/:shop_id
    this.http.get("http://localhost:3000/v1/user/1/remove/shops/"+shop_id)
      .subscribe(data => {
        console.log(data);
      });
  }

}
