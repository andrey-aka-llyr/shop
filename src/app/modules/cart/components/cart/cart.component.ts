import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../../../models';
import { CartService } from '../../../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onProductCountChanged(product) {
    this.cartService.changeProductCount(product);
  }
  onProductDeleted(product) {
    this.cartService.deleteProduct(product);
  }
}
