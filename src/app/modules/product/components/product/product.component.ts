import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { Product } from '../../../../models';
import { ProductService } from '../../../../services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() buy: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private productService: ProductService) {
  }

  ngOnInit () {
  }

  productAvailable(product: Product): boolean {
    return this.productService.productAvailable(product);
  }

  onBuy() {
    this.buy.next(this.product);
  }
}
