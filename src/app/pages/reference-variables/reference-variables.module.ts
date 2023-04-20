import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceVariablesComponent } from './reference-variables.component';
import { ReferenceVariablesRoutingModules } from './reference-variables-routing.modules';



@NgModule({
  declarations: [
    ReferenceVariablesComponent
  ],
  imports: [
    CommonModule,
    ReferenceVariablesRoutingModules
  ]
})
export class ReferenceVariablesModule { }
