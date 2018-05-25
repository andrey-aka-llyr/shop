import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent, ProductListComponent } from './components';

@NgModule({
  imports: [
    CommonModule
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
