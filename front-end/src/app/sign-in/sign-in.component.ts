import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { EntryService } from '../entry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  
  constructor(private entryService : EntryService,
              private router : Router,
              private sessionService :SessionService) { }

  ngOnInit() {
  }

  errorMessage: String;

  sign_in(email : String ,password : String){
    this.entryService.sign_in(email,password)
    .subscribe(
      resp =>{
      this.sessionService.id=resp.body.id;
      this.sessionService.email=resp.body.email;
      this.sessionService.authentication_token=resp.body.authentication_token;
      this.router.navigate(['dashboard']);
      },
      error =>{
        this.errorMessage=error.statusText;
      }
    );
  }
}
