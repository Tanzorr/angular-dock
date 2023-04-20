import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexControlDirective } from './index-control.directive';



@NgModule({
  declarations: [
    IndexControlDirective
  ],
  exports: [
    IndexControlDirective
  ],
  imports: [
    CommonModule
  ]
})
export class IncexControlModule { }
