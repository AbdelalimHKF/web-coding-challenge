import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-preferred-shop',
  templateUrl: './preferred-shop.component.html',
  styleUrls: ['./preferred-shop.component.css']
})
export class PreferredShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   @Input() preferredShop : any

}
