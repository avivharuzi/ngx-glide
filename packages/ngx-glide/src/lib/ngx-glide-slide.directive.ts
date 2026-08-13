import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxGlideSlide]',
  standalone: true,
})
export class NgxGlideSlideDirective {
  constructor(elementRef: ElementRef, renderer: Renderer2) {
    renderer.addClass(elementRef.nativeElement, 'glide__slide');
  }
}
