import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolkitModule } from '../toolkit/toolkit.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent, ProductListComponent, ProductsComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ToolkitModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductsComponent
  ],
  exports: [
  ]
})
export class ProductModule { }
