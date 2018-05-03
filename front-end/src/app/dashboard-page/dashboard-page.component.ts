import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.nearbyShopsShowed = true;
    this.preferredShopsShowed= false;
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
