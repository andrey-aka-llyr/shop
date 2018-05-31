import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ProductCartInfo, Product } from '../../../../models';
import { ProductService, CartService } from '../../../../services';

@Component({
  selector: 'app-cart-item-count',
  templateUrl: './cart-item-count.component.html',
  styleUrls: ['./cart-item-count.component.css']
})
export class CartItemCountComponent implements OnInit {
  info: ProductCartInfo;
  private product: Product;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.info = this.cartService.getCartItem(id);
    if (!this.info) {
      this.productService.getProduct(id).then(product => {
        this.product = product;
        this.info = new ProductCartInfo(product, 1);
      });
    }
  }

  onBuy() {
    if (this.product) {
      this.cartService.buyProduct(this.product, this.info.count);
    } else {
      this.cartService.changeProductCount(this.info);
    }
    this.onBack();
  }
  onBack() {
    this.location.back();
  }
}
