import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent1Component } from './parent1.component';
import { Child1Module } from './child1/child1.module';
import { Child4Module } from '../../branch2/parent/child4/child4.module';
import { Child2Module } from './child2/child2.module';



@NgModule({
  declarations: [
    Parent1Component
  ],
  exports: [
    Parent1Component
  ],
  imports: [
    CommonModule,
    Child1Module,
    Child4Module,
    Child2Module
  ]
})
export class Parent1Module { }
