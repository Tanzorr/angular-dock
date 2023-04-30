import {ChangeDetectionStrategy, Component, ElementRef, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-zone-run',
  templateUrl: './zone-run.component.html',
  styleUrls: ['./zone-run.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoneRunComponent implements OnInit {

  constructor(private _ngZone: NgZone,
              private _elementRef: ElementRef
              ) {}

  ngOnInit(): void {
  }

  onClick() {
      console.log('run zone');
      this._elementRef.nativeElement.querySelector('button').innerText = 'Clicked';
  }
}
