import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() buy: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit () {
  }

  onBuy() {
    this.buy.next(this.product);
  }
}
