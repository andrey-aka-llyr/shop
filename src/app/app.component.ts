import { Component, OnInit } from '@angular/core';

import { Product } from './models/product.model';
import { Cart } from './models/cart.model';

import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, CartService]
})
export class AppComponent implements OnInit {
  products: Array<Product>;
  cart: Cart;

  constructor(
    private productsService: ProductService,
    private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.cart = this.cartService.getCart();
  }
}
