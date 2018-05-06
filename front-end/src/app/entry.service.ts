import { Injectable } from '@angular/core';
import { User_credential } from './user_credential';
import { SessionService } from './session.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EntryService {

  constructor(private http : HttpClient, private sessionService : SessionService ) { }

  user_credential = new User_credential()
  sign_in(email : String ,password : String){
    this.user_credential.email=email;
    this.user_credential.password=password;
    return this.http.post<SessionService>("http://localhost:3000/v1/sessions",this.user_credential,{observe : 'response'})
    .map(resp => resp);
  }

  sign_up(email : String ,password : String){
    this.user_credential.email=email;
    this.user_credential.password=password;
    return this.http.post("http://localhost:3000/v1/users",this.user_credential,{observe : 'response'});
  }

}
