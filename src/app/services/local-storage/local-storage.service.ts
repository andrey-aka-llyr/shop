import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  available: boolean;

  constructor() {
    this.available = (typeof window['localStorage'] !== 'undefined') && (window['localStorage'] != null);
  }

  setItem(key: string, data: string) {
    if (this.available) {
      localStorage.setItem(key, data);
    }
  }
  getItem(key: string): string {
    return this.available ? localStorage.getItem(key) : undefined;
  }
  removeItem(key: string) {
    if (this.available) {
      localStorage.removeItem(key);
    }
  }
  clearStorage() {
    if (this.available) {
      localStorage.clear();
    }
  }
}
