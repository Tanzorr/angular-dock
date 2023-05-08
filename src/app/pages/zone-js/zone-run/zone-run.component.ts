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
  styleUrls: [ './zone-run.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoneRunComponent implements OnInit {
  clicked = false;
  setInterval: any;
  iteration = 0;

  @ViewChild('rotateElement') rotatedElem: ElementRef;

  constructor(private _ngZone: NgZone,
              private _elementRef: ElementRef,
              private _cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {

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

    this._ngZone.runOutsideAngular(() => {
      this.setInterval = setInterval(() => {
        counter++;
        this.clicked = !this.clicked;
        element.nativeElement.style.transform = `rotate(${ counter }deg)`;

        if (counter > 360) {
          counter = 0;
          this._ngZone.run(() => {
            this.iteration++;
            this._cdr.markForCheck();
          })
        }
      }, 10);
    })
  }
}
