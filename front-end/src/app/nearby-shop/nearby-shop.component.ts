import { Component, OnInit,Input } from '@angular/core';
import { ActionService } from '../action.service';
import { SharedService } from '../shared.service';
import { FctService } from '../fct.service';


@Component({
  selector: 'app-nearby-shop',
  templateUrl: './nearby-shop.component.html',
  styleUrls: ['./nearby-shop.component.css']
})
export class NearbyShopComponent implements OnInit {

  constructor(private actionService : ActionService, 
              private sharedService : SharedService,
              private fctService : FctService) { }

  ngOnInit() {
  }

  @Input() nearbyShop : any

  like(shop_id : number ){
    this.actionService.like(shop_id)
    .subscribe(resp => {this.fctService.deleteShop(shop_id, this.sharedService.nearbyShops);},
               error => {console.log(error);}
    );
  }

  dislike(shop_id : number ){
    this.actionService.like(shop_id)
    .subscribe(resp => {this.fctService.deleteShop(shop_id, this.sharedService.nearbyShops);},
               error => {console.log(error);}
    );
  }

}
