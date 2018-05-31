import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './components';

const routes: Routes = [
    {
        path: 'goods',
        component: ProductsComponent
    },
    {
        path: '',
        redirectTo: 'goods',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
