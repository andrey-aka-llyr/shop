import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../../models';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {
  @Input() product: Product;
  @Output() edit = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.edit.next(this.product);
  }
  onDelete() {
    this.delete.next(this.product);
  }
}
