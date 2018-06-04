import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../../services';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate, CanActivateChild {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticated(state);
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticated(state);
  }

  authenticated(state: RouterStateSnapshot): boolean {
    if (this.loginService.authenticated()) {
      return true;
    } else {
      const { url } = state;
      this.router.navigate(['login'], { queryParams: { 'returnUrl': url } });
      return false;
    }
  }
}
