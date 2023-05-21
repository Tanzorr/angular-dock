import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRandomBackground]',
  exportAs: 'appRandomBackground'
})
export class RandomBackgroundDirective {
  colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'purple', 'brown', 'black', 'white'];

  constructor(private _element: ElementRef) { }

  changeBackground() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this._element.nativeElement.style.backgroundColor = this.colors[randomIndex];
  }
}
