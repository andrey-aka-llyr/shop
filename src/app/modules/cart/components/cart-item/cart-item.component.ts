import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { ProductCartInfo } from '../../../../models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: ProductCartInfo;
  @Output() countChanged: EventEmitter<ProductCartInfo> = new EventEmitter<ProductCartInfo>();
  @Output() deleted: EventEmitter<ProductCartInfo> = new EventEmitter<ProductCartInfo>();

  @HostBinding('class') cssClass: string;
  @HostListener('mouseenter') setHoverColor() {
    this.cssClass = 'hovered';
  }
  @HostListener('mouseleave') resetHoverColor() {
    this.cssClass = '';
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEdit() {
    this.router.navigate(['cart/edit', this.product.id]);
  }
  onDelete() {
    this.deleted.next(this.product);
  }
}
