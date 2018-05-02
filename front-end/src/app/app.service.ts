import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from './session.service';

@Injectable()
export class AppService {

  constructor(private http : HttpClient, private sessionService : SessionService) { }

  url_users : string = "http://localhost:3000/v1/users/"+this.sessionService.id;
  token: string ="?authentication_token="+this.sessionService.authentication_token;

  getNearbyShops() : Observable <any> {
    return this.http.get(this.url_users+"/nearby_shops"+this.token);
  }

  getPreferredShops(): Observable <any> {
   return  this.http.get(this.url_users+"/preferred_shops"+this.token);
  }

  isUserAuthenticated(){
    return this.sessionService.authentication_token != undefined ;
  }

}
