import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor( private locationServive : LocationService) { }

  ngOnInit() {
    this.nearbyShopsShowed = true;
    this.preferredShopsShowed= false;
    this.locationServive.getCoodinate();
  }

  nearbyShopsShowed :boolean;
  preferredShopsShowed :boolean;
  showNearbyShops(){
    this.nearbyShopsShowed = true;
    this.preferredShopsShowed= false;
  }

  showPreferredShops(){
    this.nearbyShopsShowed = false;
    this.preferredShopsShowed = true;
  }

}
