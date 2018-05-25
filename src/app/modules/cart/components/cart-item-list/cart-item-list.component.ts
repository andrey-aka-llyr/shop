import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ProductCartInfo } from '../../../../models';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit {
  @Input() products: Array<ProductCartInfo>;
  @Output() productCountChanged: EventEmitter<ProductCartInfo> = new EventEmitter<ProductCartInfo>();
  @Output() productDeleted: EventEmitter<ProductCartInfo> = new EventEmitter<ProductCartInfo>();

  constructor() { }

  ngOnInit() {
  }

  onProductCountChanged(product) {
    this.productCountChanged.next(product);
  }
  onProductDeleted(product) {
    this.productDeleted.next(product);
  }
}
