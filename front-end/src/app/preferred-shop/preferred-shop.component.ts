import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActionService } from '../action.service';


@Component({
  selector: 'app-preferred-shop',
  templateUrl: './preferred-shop.component.html',
  styleUrls: ['./preferred-shop.component.css']
})
export class PreferredShopComponent implements OnInit {

  constructor(private actionService : ActionService) { }

  ngOnInit() {
  }
   @Input() preferredShop : any

   remove(shop_id : number ){
    this.actionService.remove(shop_id);
  }

}
