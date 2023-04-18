import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForTemplateComponent } from './for-template.component';



@NgModule({
  declarations: [
    ForTemplateComponent
  ],
  exports: [
    ForTemplateComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ForTemplateModule { }
