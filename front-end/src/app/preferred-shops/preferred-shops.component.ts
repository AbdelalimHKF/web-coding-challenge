import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-preferred-shops',
  templateUrl: './preferred-shops.component.html',
  styleUrls: ['./preferred-shops.component.css']
})
export class PreferredShopsComponent implements OnInit {
  
  
  constructor( private appServive: AppService, private sharedService : SharedService ) { }

  ngOnInit() {
    this.getPreferredShops();
  }  

  getPreferredShops(){
    this.appServive.getPreferredShops()
    .subscribe(
      resp => {
        this.sharedService.preferredShops=resp.body;
      },
      error => {
        console.log(error);
      }
    );
  }
}
