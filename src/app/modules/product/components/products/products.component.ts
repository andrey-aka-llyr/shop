import { Component, OnInit } from '@angular/core';

import { Product } from '../../../../models';
import { ProductService, CartService } from '../../../../services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Promise<Product[]>;

  constructor(
    private productsService: ProductService,
    private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onBuy(product): void {
    this.cartService.buyProduct(product);
  }
}
