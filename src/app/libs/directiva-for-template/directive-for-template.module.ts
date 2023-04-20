import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveForTemplateDirective } from './directive-for-template.directive';



@NgModule({
  declarations: [
    DirectiveForTemplateDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectiveForTemplateDirective
  ]
})
export class DirectiveForTemplateModule { }
