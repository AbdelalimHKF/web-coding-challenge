import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  
  constructor(private entryService : EntryService) { }

  ngOnInit() {
  }

  sign_in(email : String ,password : String){
    this.entryService.sign_in(email,password);
  }
}
