import { Injectable } from '@angular/core';

import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private static entryName = 'ShopLogin';
  private static entryValue = 'logged';

  constructor(private storageService: LocalStorageService) { }

  public login() {
    this.storageService.setItem(LoginService.entryName, LoginService.entryValue);
  }
  public logout() {
    this.storageService.removeItem(LoginService.entryName);
  }
  public authenticated(): boolean {
    return this.storageService.getItem(LoginService.entryName) === LoginService.entryValue;
  }
}
