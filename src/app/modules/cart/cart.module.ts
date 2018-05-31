import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToolkitModule } from '../toolkit/toolkit.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartItemComponent, CartItemListComponent } from './components';
import { OrderComponent } from './components/order/order.component';
import { CartItemCountComponent } from './components/cart-item-count/cart-item-count.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToolkitModule,
    CartRoutingModule
  ],
  declarations: [
    CartComponent,
    CartItemComponent,
    CartItemListComponent,
    OrderComponent,
    CartItemCountComponent
  ],
  exports: [
  ]
})
export class CartModule { }
