import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnonymousSubject } from 'rxjs/Subject';
import { User_credential } from '../user_credential';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private http :HttpClient) { }

  ngOnInit() {
  }
  session : any;
  user_credential = new User_credential()
  sign_in(email : String ,password : String){
    this.user_credential.email=email;
    this.user_credential.password=password;
    this.http.post("http://localhost:3000/v1/sessions",this.user_credential).
    subscribe(data =>{
      this.session=data;
    });
  }

}
