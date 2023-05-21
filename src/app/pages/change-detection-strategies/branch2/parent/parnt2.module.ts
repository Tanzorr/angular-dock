import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent2Component } from './parent2.component';
import { Child1Module } from '../../branch1/parent1/child1/child1.module';
import { Child4Module } from './child4/child4.module';
import { Child2Module } from '../../branch1/parent1/child2/child2.module';
import { Child3Module } from './child3/child3.module';



@NgModule({
  declarations: [
    Parent2Component
  ],
  exports: [
    Parent2Component
  ],
  imports: [
    CommonModule,
    Child1Module,
    Child4Module,
    Child2Module,
    Child3Module
  ]
})
export class Parnt2Module { }
