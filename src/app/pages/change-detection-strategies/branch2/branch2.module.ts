import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Branch2Component } from './branch2.component';
import { Parnt2Module } from './parent/parnt2.module';
import { RandomBackgroundModule } from '../../../libs/random-background/random-background.module';



@NgModule({
  declarations: [
    Branch2Component
  ],
  exports: [
    Branch2Component
  ],
  imports: [
    CommonModule,
    Parnt2Module,
    RandomBackgroundModule
  ]
})
export class Branch2Module { }
