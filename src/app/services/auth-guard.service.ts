import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  // route  =  siguiente pagina
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('next');
    console.log(route);
    if (this.auth.isAuthenticated()) {
      console.log('pasó el guard');
      return true;
    } else {
      console.error('bloqueado por el guard');
      return false;
    }
  }


}
