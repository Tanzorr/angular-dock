import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child3Component } from './child3.component';



@NgModule({
  declarations: [
    Child3Component
  ],
  exports: [
    Child3Component
  ],
  imports: [
    CommonModule
  ]
})
export class Child3Module { }
