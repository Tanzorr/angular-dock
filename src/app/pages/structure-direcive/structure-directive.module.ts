import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureDirectiveComponent } from './structure-directive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatrixDirective } from '../../matrix.directive';
import { LetDirective } from '../../let/let.directive';
import { NestedForDirective } from '../../nested-for.directive';
import { UnlessDirective } from '../../unless.directive';


@NgModule({
  declarations: [
    StructureDirectiveComponent,
    MatrixDirective
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StructureDirectiveModule { }
