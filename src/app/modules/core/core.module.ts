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
  exports: [
    CoreDemoComponent
  ],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    { provide: ConstantsService, useValue: appInfo },
    { provide: GENERATOR, useFactory: GeneratorFactory(10), deps: [GeneratorService] }
  ],
  declarations: [CoreDemoComponent, SelectorDirective]
})
export class CoreModule { }
