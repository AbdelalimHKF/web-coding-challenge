import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nearby-shops',
  templateUrl: './nearby-shops.component.html',
  styleUrls: ['./nearby-shops.component.css']
})
export class NearbyShopsComponent implements OnInit {

  constructor(private appService : AppService) { }

  ngOnInit() {
    this.getNearbyShops();
  }

  nearbyShops : any

  getNearbyShops(){
    this.appService.getNearbyShops()
    .subscribe(
      resp => {this.nearbyShops=resp.body;
      },
      error => {console.log(error)}
    );
  }
}
