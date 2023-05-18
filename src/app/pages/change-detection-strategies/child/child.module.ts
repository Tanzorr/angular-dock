import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { ParentModule } from '../parent/parent.module';



@NgModule({
  declarations: [
    ChildComponent
  ],
  exports: [
    ChildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChildModule { }
