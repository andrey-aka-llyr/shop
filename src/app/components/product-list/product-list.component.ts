import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCategory } from '../../models/product-category.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Array<Product>;
  
  constructor() { }

  ngOnInit() {
  }
}
