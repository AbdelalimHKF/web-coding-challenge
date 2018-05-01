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
    this.http.post<SessionService>("http://localhost:3000/v1/sessions",this.user_credential)
    .map(resp => resp)
    .subscribe(data =>{
      this.sessionService.id=data.id;
      this.sessionService.email=data.email;
      this.sessionService.authentication_token=data.authentication_token;
    });
  }

  sign_up(email : String ,password : String){
    this.user_credential.email=email;
    this.user_credential.password=password;
    this.http.post("http://localhost:3000/v1/users",this.user_credential)
     .subscribe(data =>{
      console.log("user created",data);
    });
  }

}
