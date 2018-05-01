import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ActionService {

  constructor(private http : HttpClient) { }

  like(shop_id : number ){
    //user/:user_id/like/shops/:shop_id
    this.http.get("http://localhost:3000/v1/user/1/like/shops/"+shop_id)
      .subscribe(data => {
        console.log(data);
      });
  }

  dislike(shop_id : number ){
    //api : user/:user_id/dislike/shops/:shop_id
    this.http.get("http://localhost:3000/v1/user/1/dislike/shops/"+shop_id)
      .subscribe(data => {
        console.log(data);
      });
  }

  remove(shop_id : number ){
    //user/:user_id/like/shops/:shop_id
    this.http.get("http://localhost:3000/v1/user/1/remove/shops/"+shop_id)
      .subscribe(data => {
        console.log(data);
      });
  }

}
