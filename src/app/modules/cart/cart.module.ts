import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent, CartItemComponent, CartItemListComponent } from './components';

@NgModule({
  imports: [
    CommonModule
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
