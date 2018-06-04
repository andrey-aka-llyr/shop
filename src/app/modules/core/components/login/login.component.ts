import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginService } from '../../../../services';

const DefaultNavigation = '/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private returnUrl: string;
  private sub: Subscription;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.queryParamMap.pipe(
      map(params => params.get('returnUrl'))
    ).subscribe(x => this.returnUrl = x);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  authenticated(): boolean {
    return this.loginService.authenticated();
  }
  getStatus(): string {
    return this.loginService.authenticated() ? 'Authenticated' : 'Signed out';
  }

  onLogin() {
    this.loginService.login();
    this.router.navigate(this.returnUrl ? [this.returnUrl] : [DefaultNavigation]);
  }
  onLogout() {
    this.loginService.logout();
  }
}
