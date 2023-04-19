import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StructureDirectivesComponent } from './structure-directives.component';

const routes: Routes = [
  {
    path: '',
    component: StructureDirectivesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StructureDirectivesRoutingModule {
}
