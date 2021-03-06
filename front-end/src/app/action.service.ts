import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';
import 'rxjs/add/operator/map';

@Injectable()
export class ActionService {

  constructor(private http : HttpClient,private sessionService :SessionService ) { }

  server_name : string ="http://localhost:3000"
  url_users : string = "/v1/user/"+this.sessionService.id;
  token: string ="?authentication_token="+this.sessionService.authentication_token;

  like(shop_id : number ){
    //user/:user_id/like/shops/:shop_id
    let url = this.server_name+this.url_users+"/like/shops/"+shop_id+this.token
   return this.http.get(url,{ observe :'response'});
  }

  dislike(shop_id : number ){
    //api : user/:user_id/dislike/shops/:shop_id
    let url = this.server_name+this.url_users+"/dislike/shops/"+shop_id+this.token
    return this.http.get(url,{observe:'response'});
  }

  remove(shop_id : number ){
    //user/:user_id/like/shops/:shop_id
    let url = this.server_name+this.url_users+"/remove/shops/"+shop_id+this.token
    return this.http.get(url,{observe:'response'});
  }

}
