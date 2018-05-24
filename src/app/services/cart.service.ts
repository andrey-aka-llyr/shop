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
    product.count -= realCount;

    const info = this.getProductInfo(product);
    info.count += realCount;
  }

  private getProductInfo(product: Product) {
    let result = this.cart.cart.find(x => x.id === product.id);
    if (!result) {
      result = new ProductCartInfo(product, 0);
      this.cart.cart.push(result);
    }
    return result;
  }
}
