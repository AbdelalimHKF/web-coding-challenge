import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private entryService : EntryService) { }

  ngOnInit() {
  }

  sign_up(email : String ,password : String){
    this.entryService.sign_up(email,password);
  }
}
