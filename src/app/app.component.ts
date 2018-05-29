import { Component, OnInit } from '@angular/core';

import { Product, Cart } from './models';
import { ProductService, CartService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, CartService]
})
export class AppComponent implements OnInit {
  products: Promise<Product[]>;
  cart: Cart;

  constructor(
    private productsService: ProductService,
    private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.cart = this.cartService.getCart();
  }

  onBuy(product): void {
    this.cartService.buyProduct(product);
  }
}
