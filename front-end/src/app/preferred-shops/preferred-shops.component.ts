import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-preferred-shops',
  templateUrl: './preferred-shops.component.html',
  styleUrls: ['./preferred-shops.component.css']
})
export class PreferredShopsComponent implements OnInit {
  
  
  constructor( private http : HttpClient) { }

  ngOnInit() {
    this.getPreferredShops();
  }

  preferredShops : any;  

  getPreferredShops(){
    this.http.get("http://localhost:3000/v1/users/1/preferred_shops").subscribe(data => {
      console.log(data)
      this.preferredShops=data;
      console.log(this.preferredShops)
      });
  }
}
