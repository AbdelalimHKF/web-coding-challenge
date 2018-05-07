import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from './session.service';
import 'rxjs/add/operator/map';
import { LocationService } from './location.service';

@Injectable()
export class AppService {

  constructor(private http : HttpClient, 
              private sessionService : SessionService,
              private locationServive : LocationService ) { }

  
  url_users : string = "http://localhost:3000/v1/users/"+this.sessionService.id;
  token: string ="?authentication_token="+this.sessionService.authentication_token;
  coordinate_params : string = "&longitude=" +this.locationServive.longitude+"&latitude="+this.locationServive.latitude;
  distance_param : string = "&distance="+1000;

  getNearbyShops() : Observable <any> {
    return this.http.get(this.url_users+"/nearby_shops"+this.token+this.coordinate_params+this.distance_param,{observe :'response'});
  }

  getPreferredShops(): Observable <any> {
   return  this.http.get(this.url_users+"/preferred_shops"+this.token,{observe :'response'});
  }

  isUserAuthenticated(){
    return this.sessionService.authentication_token != undefined ;
  }

}
