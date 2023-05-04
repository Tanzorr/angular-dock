import {ChangeDetectionStrategy, Component, NgZone, OnInit} from '@angular/core';
import {first, tap} from "rxjs";

@Component({
  selector: 'app-zone-onstable',
  templateUrl: './zone-onstable.component.html',
  styleUrls: ['./zone-onstable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoneOnstableComponent implements OnInit {
  stableMessage: string = '';
  promise1Message: string = '';
  promise2Message: string = '';
  promise3Message: string = '';

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    // this.ngZone.onStable.pipe().subscribe(() => {
    //   // This callback will be executed after all micro tasks have been flushed,
    //   // but before the next macro task is executed.
    //   this.stableMessage = 'All micro tasks have been completed.';
    //   console.log('All micro tasks have been completed.')
    // });

    this._ngZone.onStable.pipe(tap(() => {
      this.stableMessage = 'All micro tasks have been completed.';
      console.log('All micro tasks have been completed.')
    }))

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
