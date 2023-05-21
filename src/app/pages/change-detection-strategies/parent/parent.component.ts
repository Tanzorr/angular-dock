import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  parentFood: string[] =['Pizza', 'Pasta', 'Sandwich']
  singleFood: string = 'Pizza';
  constructor(private _cdr: ChangeDetectorRef) {
    // this._cdr.detach(); the same as onPush
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.parentFood.push('Burger');
      this.singleFood = 'Burger';
      //this._cdr.markForCheck();
      console.log('Parent triggered')
      this._cdr.detectChanges();
    }, 2000);
  }

  triggerParent():void {
    console.log('Parent triggered');
  }
}
