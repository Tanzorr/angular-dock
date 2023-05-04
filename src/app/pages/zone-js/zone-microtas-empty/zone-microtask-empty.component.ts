import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';


// @ts-ignore
@Component({
  selector: 'app-zone-microtask-empty',
  templateUrl: './zone-microtask-empty.component.html',
  styleUrls: ['./zone-microtask-empty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoneMicrotaskEmptyComponent {
  items: any[] = [];

  constructor(private _ngZone: NgZone) {}

  onClick() {
    // Schedule some microtasks within the Angular zone
    this._ngZone.onMicrotaskEmpty.subscribe(() => {
      console.log('Microtasks are empty, fetching data...');

    });
  }

}
