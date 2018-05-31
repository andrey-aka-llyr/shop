import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './components';
import { ProductService, CartService } from '../../services';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NotFoundComponent],
  declarations: [NotFoundComponent],
  providers: [ProductService, CartService]
})
export class CoreModule { }
