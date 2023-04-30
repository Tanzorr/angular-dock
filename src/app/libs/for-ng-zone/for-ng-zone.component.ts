import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-for-ng-zone',
  templateUrl: './for-ng-zone.component.html',
  styleUrls: ['./for-ng-zone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForNgZoneComponent implements OnInit{
  number = 0;

  constructor(private _zone: NgZone,
              private _cdr: ChangeDetectorRef
              ) {
  }

  ngOnInit(): void {
    let counter = 0;

    this._zone.runOutsideAngular(() => {
      setInterval(() => {
        counter++;
        this.number = Math.random();
        console.log('counter', counter);
        if(counter > 3) {
          counter = 0;
          this._zone.run(() => {
            console.log('run');
           // this.number = Math.random();
            this._cdr.markForCheck();
          })
        }
        this.number = Math.random();
      }, 500);
    })
  }
}


