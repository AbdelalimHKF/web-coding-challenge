import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-nearby-shops',
  templateUrl: './nearby-shops.component.html',
  styleUrls: ['./nearby-shops.component.css']
})
export class NearbyShopsComponent implements OnInit {

  constructor(private appService : AppService,private sharedService : SharedService ) { }

  ngOnInit() {
    this.getNearbyShops();
  }

  getNearbyShops(){
    this.appService.getNearbyShops()
    .subscribe(
      resp => {this.sharedService.nearbyShops=resp.body;
      },
      error => {console.log(error)}
    );
  }
}
