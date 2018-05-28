import { Injectable } from '@angular/core';

import { Product, ProductCartInfo, Cart } from '../../models';
import { ProductService } from '../product/product.service';

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
  get totalProductCount(): number {
    let result = 0;
    this.cart.products.forEach(x => result += x.count);
    return result;
  }
  get totalPrice(): number {
    let result = 0;
    this.cart.products.forEach(x => result += x.price * x.count);
    return result;
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
    this.restoreProductCount(info);
    this.cart.products.splice(this.cart.products.indexOf(info), 1);
  }
  clear() {
    this.cart.products.forEach(x => this.restoreProductCount(x));
    this.cart.products.length = 0;
  }

  private getProductInfo(product: Product) {
    let result = this.cart.products.find(x => x.id === product.id);
    if (!result) {
      result = new ProductCartInfo(product);
      this.cart.products.push(result);
    }
    return result;
  }
  private restoreProductCount(info: ProductCartInfo) {
    const product = this.productService.getProduct(info.id);
    product.count = info.total;
  }
}
