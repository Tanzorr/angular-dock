import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';


@Component({
  selector: 'app-zone-onstable',
  templateUrl: './zone-onstable.component.html',
  styleUrls: [ './zone-onstable.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoneOnstableComponent {
  stableMessage: string = '';
  promise1Message: string = '';
  promise2Message: string = '';
  promise3Message: string = '';

  constructor(private _ngZone: NgZone,
  ) {
  }

  onClick() {
    this._ngZone.onStable.subscribe(() => {
      this.stableMessage = 'All micro tasks have been completed.';
      console.log('All micro tasks have been completed.')
    })

    // Schedule a micro task
    Promise.resolve().then(() => this.promise1Message = 'Micro task1 executed.')
    .then(() => this.promise2Message = 'Micro task2 executed.')
    .then(() => this.promise3Message = 'Micro task3 executed.')
    .then(() => console.log('Micro tasks completed!'));
  }
}
