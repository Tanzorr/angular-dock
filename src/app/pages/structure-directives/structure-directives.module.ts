import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureDirectivesComponent } from './structure-directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructureDirectivesRoutingModule } from './structure-directives-routing.module';


@NgModule({
  declarations: [
    StructureDirectivesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StructureDirectivesRoutingModule
  ]
})
export class StructureDirectivesModule { }
