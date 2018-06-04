import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../../../models';
import { ProductService, DialogService } from '../../../../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Promise<Product[]>;

  constructor(
    private productService: ProductService,
    private dialogService: DialogService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onCreate() {
    this.router.navigate(['admin/new']);
  }
  onEdit(product: Product) {
    this.router.navigate(['admin/edit', product.id]);
  }
  onDelete(product: Product) {
    this.dialogService.confirm(`${product.name} will be deleted`).then(x => {
      if (x) {
        this.productService.deleteProduct(product);
      }
    });
  }
}
