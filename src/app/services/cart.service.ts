import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductCartInfo } from '../models/product-cart-info.model';
import { Cart } from '../models/cart.model';

import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;

  constructor(private productService: ProductService) {
    this.cart = new Cart();
  }

  getCart(): Cart {
    return this.cart;
  }
  buyProduct(product: Product, count?: number)  {
    const realCount = Math.min(count || 1, product.count);
    const info = this.getProductInfo(product);
    product.count -= realCount;
    info.count += realCount;
  }
  changeProductCount(info: ProductCartInfo) {
    const product = this.productService.getProduct(info.id);
    product.count = info.total - info.count;
  }
  deleteProduct(info: ProductCartInfo) {
    const product = this.productService.getProduct(info.id);
    product.count = info.total;
    this.cart.products.splice(this.cart.products.indexOf(info), 1);
  }

  private getProductInfo(product: Product) {
    let result = this.cart.products.find(x => x.id === product.id);
    if (!result) {
      result = new ProductCartInfo(product);
      this.cart.products.push(result);
    }
    return result;
  }
}
