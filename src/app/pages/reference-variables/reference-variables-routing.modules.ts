import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferenceVariablesComponent } from './reference-variables.component';

const routes: Routes = [
  {
    path: '',
    component: ReferenceVariablesComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class ReferenceVariablesRoutingModules {
}
