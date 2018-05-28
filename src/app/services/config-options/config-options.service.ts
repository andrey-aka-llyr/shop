import { Injectable } from '@angular/core';
import { Configuration } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private options: Configuration;

  constructor() {
    this.options = new Configuration(123, 'me@my.com', 'me@my.com');
  }

  get configuration(): Configuration {
    return this.options;
  }
  set configuration(data: Configuration) {
    this.options = data;
  }
}
