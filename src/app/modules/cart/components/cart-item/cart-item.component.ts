import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
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

  @ViewChild('count') count: ElementRef;

  @HostBinding('class') cssClass: string;
  @HostListener('mouseenter') setHoverColor() {
    this.cssClass = 'hovered';
  }
  @HostListener('mouseleave') resetHoverColor() {
    this.cssClass = '';
  }

  constructor() { }

  ngOnInit() {
  }

  onCountChanged() {
    const input = this.count.nativeElement as HTMLInputElement;
    const value = parseInt(input.value, 10);
    if ((value > 0) && (value <= this.product.total)) {
      this.product.count = value;
      this.countChanged.next(this.product);
    } else {
      input.value = this.product.count.toString(10);
    }
  }
  onDelete() {
    this.deleted.next(this.product);
  }
}
