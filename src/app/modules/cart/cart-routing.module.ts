import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';
import { OrderComponent } from './components';

const routes: Routes = [
    {
        path: 'cart',
        component: CartComponent,
        children: [
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
