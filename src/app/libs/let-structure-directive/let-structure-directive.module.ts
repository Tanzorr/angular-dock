import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetStructureDirectiveDirective } from './let-structure-directive.directive';


@NgModule({
  declarations: [
    LetStructureDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LetStructureDirectiveDirective
  ]
})
export class LetStructureDirectiveModule { }
