import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  LocalStorageService,
  ConfigOptionsService,
  ConstantsService,
  GENERATOR,
  GeneratorFactory,
  GeneratorService
 } from '../../services';
import { CoreDemoComponent } from './components';
import { SelectorDirective } from './directives';

const appInfo = new ConstantsService();

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreDemoComponent, SelectorDirective],
  exports: [CoreDemoComponent, SelectorDirective],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    { provide: ConstantsService, useValue: appInfo },
    { provide: GENERATOR, useFactory: GeneratorFactory(10), deps: [GeneratorService] }
  ]
})
export class DemoModule { }
