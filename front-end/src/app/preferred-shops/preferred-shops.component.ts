import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';


@Component({
  selector: 'app-preferred-shops',
  templateUrl: './preferred-shops.component.html',
  styleUrls: ['./preferred-shops.component.css']
})
export class PreferredShopsComponent implements OnInit {
  
  
  constructor( private appServive: AppService) { }

  ngOnInit() {
    this.getPreferredShops();
  }

  preferredShops : any;  

  getPreferredShops(){
    this.appServive.getPreferredShops()
    .subscribe(
      resp => {
        this.preferredShops=resp.body;
        console.log(this.preferredShops)
      },
      error => {
        console.log(error);
      }
    );
  }
}
