import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppService } from './app.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private appService : AppService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return  this.appService.isUserAuthenticated();
  }
}
