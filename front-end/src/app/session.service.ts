import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  constructor() { }

  id : number;
  email : string;
  authentication_token : string;

}
