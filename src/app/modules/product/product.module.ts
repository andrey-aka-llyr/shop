import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolkitModule } from '../toolkit/toolkit.module';
import { ProductComponent, ProductListComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ToolkitModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductModule { }
