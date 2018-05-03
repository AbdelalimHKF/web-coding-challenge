import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActionService } from '../action.service';
import { FctService } from '../fct.service';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-preferred-shop',
  templateUrl: './preferred-shop.component.html',
  styleUrls: ['./preferred-shop.component.css']
})
export class PreferredShopComponent implements OnInit {

  constructor(private actionService : ActionService,
              private sharedService : SharedService,
              private fctService : FctService) { }

  ngOnInit() {
  }
   @Input() preferredShop : any

   remove(shop_id : number ){
    this.actionService.remove(shop_id)
    .subscribe(resp => {this.fctService.deleteShop(shop_id, this.sharedService.preferredShops);},
               error => {console.log(error);}
    );
  }

}
