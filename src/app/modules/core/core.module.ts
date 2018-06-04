import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  NotFoundComponent,
  CommentsComponent,
  LoginComponent
} from './components';
import {
  ProductService,
  CartService,
  CommentService,
  LocalStorageService,
  LoginService,
  DialogService
} from '../../services';
import { AuthenticatedGuard } from '../../guards';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NotFoundComponent, CommentsComponent, LoginComponent],
  exports: [NotFoundComponent, CommentsComponent, LoginComponent],
  providers: [
    ProductService,
    CartService,
    CommentService,
    LocalStorageService,
    LoginService,
    DialogService,
    AuthenticatedGuard
  ]
})
export class CoreModule { }
