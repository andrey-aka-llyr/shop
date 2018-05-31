import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';
import { OrderComponent, CartItemCountComponent } from './components';

const routes: Routes = [
    {
        path: 'cart',
        component: CartComponent,
        children: [
            {
                path: 'buy/:id',
                component: CartItemCountComponent
            },
            {
                path: 'edit/:id',
                component: CartItemCountComponent,
            },
            {
                path: '',
                component: OrderComponent
            },
        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartRoutingModule {
}
