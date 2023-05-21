import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from './child2.component';



@NgModule({
  declarations: [
    Child2Component
  ],
  exports: [
    Child2Component
  ],
  imports: [
    CommonModule
  ]
})
export class Child2Module { }
