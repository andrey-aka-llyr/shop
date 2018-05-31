import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../../../models';
import { ProductService } from '../../../../services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Promise<Product[]>;

  constructor(
    private productsService: ProductService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onBuy(product): void {
    this.router.navigate(['cart/buy', product.id]);
  }
}
