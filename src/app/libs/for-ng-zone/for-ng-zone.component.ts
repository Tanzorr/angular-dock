import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-for-ng-zone',
  templateUrl: './for-ng-zone.component.html',
  styleUrls: ['./for-ng-zone.component.scss']
})
export class ForNgZoneComponent  {

  constructor(private ngZone: NgZone) { }
  runOutsideZone() {
    console.log('runOutsideZone() called outside Angular zone.');
    setTimeout(() => {
      console.log('setTimeout() executed outside Angular zone.');
    }, 0);
  }

  runInsideZone() {
    console.log('runInsideZone() called inside Angular zone.');
    this.ngZone.run(() => {
      console.log('ngZone.run() executed inside Angular zone.');
      setTimeout(() => {
        console.log('setTimeout() executed inside Angular zone.');
      }, 0);
    });
  }



}
