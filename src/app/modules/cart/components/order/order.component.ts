import { Component, OnInit } from '@angular/core';

import { Cart, ProductCartInfo, NamedEntity } from '../../../../models';
import { CartService } from '../../../../services';
import { OrderByPipe } from '../../../toolkit/pipes';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderByPipe]
})
export class OrderComponent implements OnInit {
  cart: Cart;

  sortableProperties = [
    new NamedEntity('Name', 'name'),
    new NamedEntity('Count', 'count'),
    new NamedEntity('Price', 'totalPrice')
  ];
  currentProperty = this.sortableProperties[0].value;
  sortDirections = [
    new NamedEntity('Descending', false),
    new NamedEntity('Ascending', true)
  ];
  currentDirection = this.sortDirections[0].value;

  constructor(
    private cartService: CartService,
    private orderByPipe: OrderByPipe
  ) {
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  getProducts(): Array<ProductCartInfo> {
    return this.cart ? this.orderByPipe.transform(this.cart.products, this.currentProperty, this.currentDirection) : [];
  }
  getTotalCount(): number {
    return this.cartService.totalProductCount;
  }
  getTotalPrice(): number {
    return this.cartService.totalPrice;
  }
  clear() {
    this.cartService.clear();
  }

  onProductCountChanged(product) {
    this.cartService.changeProductCount(product);
  }
  onProductDeleted(product) {
    this.cartService.deleteProduct(product);
  }
}
