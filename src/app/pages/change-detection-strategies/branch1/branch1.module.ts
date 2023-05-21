import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Branch1Component } from './branch1.component';
import { Parnt2Module } from '../branch2/parent/parnt2.module';
import { Parent1Module } from './parent1/parent1.module';


@NgModule({
  declarations: [
    Branch1Component
  ],
  exports: [
    Branch1Component
  ],
  imports: [
    CommonModule,
    Parnt2Module,
    Parent1Module
  ]
})
export class Branch1Module { }
