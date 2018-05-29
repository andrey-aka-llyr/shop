import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolkitModule } from '../toolkit/toolkit.module';
import { CartComponent, CartItemComponent, CartItemListComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ToolkitModule
  ],
  declarations: [
    CartComponent,
    CartItemComponent,
    CartItemListComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
