import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnonymousSubject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { User_credential } from '../user_credential';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  
  constructor(private http :HttpClient, private sessionService : SessionService) { }

  ngOnInit() {
  }

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

}
