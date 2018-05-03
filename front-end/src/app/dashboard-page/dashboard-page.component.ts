import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.visible=true
  }

  visible:boolean;
  showNearbyShops(){
    this.visible=!this.visible
  }

  showPreferredShops(){
    this.visible=!this.visible
  }

}
