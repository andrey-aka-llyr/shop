import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Array<Product>;
  @Output() buy: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onBuy(product) {
    this.buy.next(product);
  }
}
