import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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

  private updateChannel = new Subject<Product>();
  public update$ = this.updateChannel.asObservable();

  constructor() {
    console.log('Product service constructed');
  }

  getProducts(category?: ProductCategory): Promise<Product[]> {
    const items = category ? this.products.filter(x => x.category === category) : this.products;
    return Promise.resolve(items);
  }
  getProduct(id: number): Promise<Product> {
    return Promise.resolve(this.products.find(x => x.id === id));
  }
  productAvailable(product: Product): boolean {
    return product.count > 0;
  }

  createProduct(product: Product): void {
    product.id = this.generateId();
    this.products.push(product);
  }
  updateProduct(product: Product): void {
    const existing = this.products.find(x => x.id === product.id);
    if (existing) {
      const index = this.products.indexOf(existing);
      this.products.splice(index, 1, product);
      this.updateChannel.next(product);
    }
  }
  deleteProduct(product: Product): void {
    const existing = this.products.find(x => x.id === product.id);
    if (existing) {
      const index = this.products.indexOf(existing);
      this.products.splice(index, 1);
    }
  }

  private generateId(): number {
    let result = 0;
    this.products.forEach(x => result = Math.max(result, x.id));
    return result + 1;
  }
}
