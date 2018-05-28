import { Injectable } from '@angular/core';
import { Product, ProductCategory } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    new Product(1, 'Apple', 'A big red tasty fruit', 1.17, 10, ProductCategory.Food),
    new Product(2, 'Tetris', 'A true game for all ages', 23.16, 2, ProductCategory.Games),
    new Product(3, 'Sweetshot', 'Some fashionable stuff', 15.19, 4, ProductCategory.Clothes),
    new Product(4, 'Upyachka', 'Pystch-pystch!', 15.19)
  ];

  constructor() { }

  getProducts(category?: ProductCategory): Array<Product> {
    return category ? this.products.filter(x => x.category === category) : this.products;
  }
  getProduct(id: number): Product {
    return this.products.find(x => x.id === id);
  }
}
