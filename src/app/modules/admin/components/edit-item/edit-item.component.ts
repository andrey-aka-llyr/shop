import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Product, ProductCategory, NamedEntity } from '../../../../models';
import { ProductService } from '../../../../services';
import { CategoryDisplayPipe } from '../../../toolkit/pipes';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
  providers: [CategoryDisplayPipe]
})
export class EditItemComponent implements OnInit {
  product: Product;
  creation: boolean;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private categoryDisplayPipe: CategoryDisplayPipe
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const productId = +id;
      this.productService.getProduct(productId).then(x => {
        if (x) {
          this.product = {...x};
        } else {
          this.location.back();
        }
      });
    } else {
      this.creation = true;
      this.product = new Product(0, '', '', 0, 0);
    }
  }

  getCategoryOptions(): NamedEntity[] {
    const result = [];
    for (const key in ProductCategory) {
      if (typeof(ProductCategory[key]) === 'number') {
        const value: ProductCategory = ProductCategory[<string>key];
        result.push(new NamedEntity(this.categoryDisplayPipe.transform(value), value));
      }
    }
    return result;
  }

  onSave() {
    if (this.creation) {
      this.productService.createProduct(this.product);
    } else {
      this.productService.updateProduct(this.product);
    }
    this.onBack();
  }
  onBack() {
    this.location.back();
  }
}
