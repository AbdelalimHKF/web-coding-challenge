import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {

  longitude : number
  latitude : number
  constructor() {}

  getCoodinate(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(p =>{
       this.latitude=p.coords.longitude
       this.longitude=p.coords.latitude
      });
    } else {console.log("can't find location");} 
   }

}
