import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomBackgroundDirective } from './random-background.directive';



@NgModule({
  declarations: [
    RandomBackgroundDirective
  ],
  exports: [
    RandomBackgroundDirective
  ],
  imports: [
    CommonModule
  ]
})
export class RandomBackgroundModule { }
