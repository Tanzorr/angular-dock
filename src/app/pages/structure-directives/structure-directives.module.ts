import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureDirectivesComponent } from './structure-directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructureDirectivesRoutingModule } from './structure-directives-routing.module';
import { AppModule } from '../../app.module';
import { MatrixDirective } from '../../matrix.directive';
import { NestedForDirective } from '../../nested-for.directive';


@NgModule({
  declarations: [
    StructureDirectivesComponent,
    MatrixDirective,
    NestedForDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StructureDirectivesRoutingModule,
  ]
})
export class StructureDirectivesModule { }
