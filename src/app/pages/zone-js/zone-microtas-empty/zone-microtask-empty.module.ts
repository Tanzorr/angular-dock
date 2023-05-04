import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneMicrotaskEmptyComponent } from './zone-microtask-empty.component';


@NgModule({
  declarations: [
    ZoneMicrotaskEmptyComponent
  ],
  exports: [
    ZoneMicrotaskEmptyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ZoneMicrotaskEmptyModule { }
