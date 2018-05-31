import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolkitModule } from '../toolkit/toolkit.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartItemComponent, CartItemListComponent } from './components';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  imports: [
    CommonModule,
    ToolkitModule,
    CartRoutingModule
  ],
  declarations: [
    CartComponent,
    CartItemComponent,
    CartItemListComponent,
    OrderComponent
  ],
  exports: [
  ]
})
export class CartModule { }
