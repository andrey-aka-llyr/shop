import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotFoundComponent, CommentsComponent } from './components';
import {
  ProductService,
  CartService,
  CommentService,
  LocalStorageService
} from '../../services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NotFoundComponent, CommentsComponent],
  declarations: [NotFoundComponent, CommentsComponent],
  providers: [
    ProductService,
    CartService,
    CommentService,
    LocalStorageService
  ]
})
export class CoreModule { }
