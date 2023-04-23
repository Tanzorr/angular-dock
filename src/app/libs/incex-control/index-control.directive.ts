import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { CarouselDirective } from '../carousel/carousel.directive';

@Directive({
  selector: '[appIndexControl]'
})
export class IndexControlDirective implements OnChanges{
  @Input('appIndexControl') carouselDirective: CarouselDirective | undefined;

  constructor(
    private el: ElementRef,
    private _rerender: Renderer2
  ) {

  }

  @HostListener('input', [ '$event' ]) onInput(event: Event) {
    this.carouselDirective?.showImage(+(event.target as HTMLInputElement).value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {carousel} = changes;
    this.el.nativeElement.value = this.carouselDirective?.currentImageIndex;
  }
}
