import { Directive, ElementRef, NgZone, OnInit } from '@angular/core';

@Directive({
  selector: '[appRandomBackground]',
  exportAs: 'appRandomBackground'
})
export class RandomBackgroundDirective implements OnInit{
  colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'purple', 'brown', 'black', 'white'];

  constructor(private _element: ElementRef,
              private _ngZone: NgZone) { }

  ngOnInit(): void {
    // this.changeBackground();
    // this._ngZone.onStable.subscribe(() => {
    //   this.changeBackground();
    // });
  }

  changeBackground() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this._element.nativeElement.style.backgroundColor = this.colors[randomIndex];
    console.log(this._element.nativeElement)
  }
}
