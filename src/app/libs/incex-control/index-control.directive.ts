import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { CarouselDirective } from '../carousel/carousel.directive';

@Directive({
  selector: '[appIndexControl]'
})
export class IndexControlDirective {
  @Input('appIndexControl') carouselDirective: CarouselDirective | undefined;

  constructor(
    private el: ElementRef,
    private _rerender: Renderer2
  ) {
  }

  @HostListener('input', [ '$event' ]) onInput(event: Event) {
    this.carouselDirective?.showImage(+(event.target as HTMLInputElement).value);
  }
}
