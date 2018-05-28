import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelector]'
})
export class SelectorDirective {
  private selected = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('click') toggleSelection() {
    if (this.selected) {
      this.renderer.removeStyle(this.element.nativeElement, 'border');
    } else {
      this.renderer.setStyle(this.element.nativeElement, 'border', '1px solid grey');
    }
    this.selected = !this.selected;
  }
}
