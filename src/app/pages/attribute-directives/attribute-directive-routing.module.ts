import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AttributeDirectivesComponent } from './attribute-directives.component';

const routes: Routes = [
  {
    path: '',
    component: AttributeDirectivesComponent,
    pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttributeDirectiveRoutingModule {
}
