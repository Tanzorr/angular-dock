import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild
} from '@angular/core';


@Component({
  selector: 'app-zone-run',
  templateUrl: './zone-run.component.html',
  styleUrls: ['./zone-run.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoneRunComponent implements OnInit {
  clicked = false;

  setInterval: any;

  @ViewChild('rotateElement') rotatedElem: ElementRef;

  constructor(private _ngZone: NgZone,
              private _elementRef: ElementRef,
              private _cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    if (this.clicked) {
      clearInterval(this.setInterval);
      this.clicked = !this.clicked;

    } else {
      this._rotateElement(this.rotatedElem);
      this.clicked = !this.clicked;
    }
  }

  onClick() {
    if (this.clicked) {
      clearInterval(this.setInterval);
    } else {
      this._rotateElement(this.rotatedElem);
    }
  }

  private _rotateElement(element: ElementRef): void {
    this.clicked = !this.clicked;
    if (!this.clicked || !element) {
      return
    }

    let counter = 0;
    let iteration = 0;

    this._ngZone.runOutsideAngular(() => {
      this.setInterval = setInterval(() => {
        counter++;
        this.clicked = !this.clicked;
        element.nativeElement.style.transform = `rotate(${counter}deg)`;

        if (counter > 360) {
          counter = 0;
          this._ngZone.run(() => {
            iteration++;
            this._elementRef.nativeElement.querySelector('h4').innerText = `Iteration: ${iteration}`;
          })
        }
      }, 10);
    })
  }
}
