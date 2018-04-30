import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nearby-shops',
  templateUrl: './nearby-shops.component.html',
  styleUrls: ['./nearby-shops.component.css']
})
export class NearbyShopsComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.getNearbyShops();
  }

  nearbyShops : any

  getNearbyShops(){
    this.http.get("http://localhost:3000/v1/users/1/nearby_shops")
    .subscribe(data => {this.nearbyShops=data;});
  }
}
