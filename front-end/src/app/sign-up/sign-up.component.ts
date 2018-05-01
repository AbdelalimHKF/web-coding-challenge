import { Component, OnInit } from '@angular/core';
import { User_credential } from '../user_credential';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  
  user_credential = new User_credential()
  sign_up(email : String ,password : String){
    this.user_credential.email=email;
    this.user_credential.password=password;
    this.http.post("http://localhost:3000/v1/users",this.user_credential)
     .subscribe(data =>{
      console.log("user created",data);
    });
  }
}
