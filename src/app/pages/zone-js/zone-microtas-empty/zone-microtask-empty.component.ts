import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { PlaceHolderService } from '../../../api-service/place-holder.service';
import { Observable } from 'rxjs';


// @ts-ignore
@Component({
  selector: 'app-zone-microtask-empty',
  templateUrl: './zone-microtask-empty.component.html',
  styleUrls: ['./zone-microtask-empty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoneMicrotaskEmptyComponent {
  items$: Observable<any[]>;
  message: string;
  microtaskEmpty: string;
  onStable: string;
  macroTask: string;
  messages: string[] = [];

  constructor(private _ngZone: NgZone,
              private _placeHolderService: PlaceHolderService) {}

  onClick() {
    setTimeout(() => {
      console.log('setTimeout');
      this.macroTask = 'setTimeout';
      this.messages.push('setTimeout');

      Promise.resolve().then(() => {
        console.log('Promise');
        this.microtaskEmpty = 'Promise';
        this.messages.push('Promise is setTimeOut');
      });
    }, 0);
    // Schedule some microtasks within the Angular zone
   this.items$ = this._placeHolderService.getList();

    this._ngZone.onMicrotaskEmpty.subscribe(() => {
      console.log('Microtasks are empty, fetching data...');
      this.messages.push('Microtasks are empty');
    });

    this._ngZone.onStable.subscribe(() => {
      console.log('All tasks are done, on stable');
      this.messages.push('onStable');
    });
  }
}

// TODO Show difference between onMicrotaskEmpty and onStable with visualization
// underused eventLoop with visualization
