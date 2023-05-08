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

  constructor(private _ngZone: NgZone,
              private _placeHolderService: PlaceHolderService) {}

  onClick() {
    // Schedule some microtasks within the Angular zone
   this.items$ = this._placeHolderService.getList();

    this._ngZone.onMicrotaskEmpty.subscribe(() => {
      console.log('Microtasks are empty, fetching data...');
      this.message = 'Microtasks are empty, fetching data...';
    });
  }
}

// TODO Show difference between onMicrotaskEmpty and onStable with visualization
// underused eventLoop with visualization
