import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

  constructor(private http : HttpClient) { }

  getPreferredShops(): Observable <any>{
   return  this.http.get("http://localhost:3000/v1/users/1/preferred_shops");
  }

}
