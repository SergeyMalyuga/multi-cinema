import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  private elementRef = inject(ElementRef);
  private render: Renderer2 = inject(Renderer2);

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const target = this.elementRef.nativeElement as HTMLElement;
    if (window.scrollY >= 10) {
      this.render.addClass(target, 'scroll');
    } else {
      this.render.removeClass(target, 'scroll');
    }
  }
}
