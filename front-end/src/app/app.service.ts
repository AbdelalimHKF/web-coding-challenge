import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from './session.service';

@Injectable()
export class AppService {

  constructor(private http : HttpClient, private sessionService : SessionService) { }

  url_users : string = "http://localhost:3000/v1/users/"+this.sessionService.id;

  getNearbyShops() : Observable <any> {
    return this.http.get(this.url_users+"/nearby_shops");
  }

  getPreferredShops(): Observable <any> {
   return  this.http.get(this.url_users+"/preferred_shops");
  }

}
