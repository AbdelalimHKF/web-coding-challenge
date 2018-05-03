import { Injectable } from '@angular/core';

@Injectable()
export class FctService {

  constructor() { }
  
  deleteShop(shop_id : number , shops : any[]){
    let index = shops.findIndex(obj => obj.id === shop_id);
    shops.splice(index, 1);
  }  

}
