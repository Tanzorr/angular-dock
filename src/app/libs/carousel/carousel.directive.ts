import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appCarousel]',
  exportAs: 'carousel'
})
export class CarouselDirective {
  get currentImageIndex(): number {
    return this._currentImageIndex;
  }

  private _currentImageIndex = 0;

  @Input() hoverColor: string = 'red';
  @Input() images: string[] = [
    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80',
    'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-2180c3d181555154d1bc13ffbbf05f29.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mclaren-artura-6-jpg-1670865667.jpg?crop=0.751xw:1.00xh;0.221xw,0&resize=640:*',
  ];

  @HostBinding('class.carousel') carousel = true;
  @HostBinding('attr.src') src = this.images[this.currentImageIndex];
  @HostBinding('style.borderColor') backgroundColor = '#fcfcfc';

  @HostListener('mouseenter') onMouseEnter() {
    this._highlight(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._highlight('');
  }

  prev(): void {
    this._setCurrentImageIndex(this._currentImageIndex - 1);
  }

  next(): void {
    this._setCurrentImageIndex(this._currentImageIndex + 1);
  }

  showImage(index: number): void {
    this._setCurrentImageIndex(index);
  }

  private _setImage(image: string): void {
    this.src = image;
  }

  private _highlight(color: string) {
    this.backgroundColor = color;
  }

  private _setCurrentImageIndex(index: number) {
    const lastValidIndex = this.images.length - 1;
    const validIndex = index < 0
      ? 0
      : index > lastValidIndex
        ? lastValidIndex
        : index;

    this._currentImageIndex = validIndex;
    this._setImage(this.images[validIndex]);
  }
}
