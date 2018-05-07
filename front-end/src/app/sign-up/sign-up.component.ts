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

  errorMessage : string; 
  isUserAdded : boolean = false;

  sign_up(email : String ,password : String){
    this.entryService.sign_up(email,password)
    .subscribe(
      resp =>{
        console.log("user created",resp.body);
        this.isUserAdded=true;
      },
      error=>{
        error.error.length < 2 ? 
        this.errorMessage=error.error[0] : 
        this.errorMessage=error.error[0]+", "+error.error[1];
      });
  }


}
