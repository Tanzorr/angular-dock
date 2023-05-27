import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: [ './child3.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child3Component implements OnInit {

  constructor(private _cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this._cdr.markForCheck();
    }, 7000);
  }

  triggerChangeDetection() {
    return Math.random() * 100;
  }

}
