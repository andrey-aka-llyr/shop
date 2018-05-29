import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDisplayPipe } from './pipes';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryDisplayPipe, OrderByPipe],
  exports: [CategoryDisplayPipe, OrderByPipe]
})
export class ToolkitModule { }
