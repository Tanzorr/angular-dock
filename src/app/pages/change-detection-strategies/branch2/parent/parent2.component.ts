import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: [ './parent2.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Parent2Component implements OnInit {

  constructor(private _cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this._cdr.detectChanges();
    } , 4000);
  }

  triggerChangeDetection() {
    return Math.random() * 100;
  }
}
