import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child4Component } from './child4.component';



@NgModule({
  declarations: [
    Child4Component
  ],
  exports: [
    Child4Component
  ],
  imports: [
    CommonModule
  ]
})
export class Child4Module { }
