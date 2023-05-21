import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Branch2Component } from './branch2.component';
import { Parnt2Module } from './parnt/parnt2.module';



@NgModule({
  declarations: [
    Branch2Component
  ],
  exports: [
    Branch2Component
  ],
  imports: [
    CommonModule,
    Parnt2Module
  ]
})
export class Branch2Module { }
