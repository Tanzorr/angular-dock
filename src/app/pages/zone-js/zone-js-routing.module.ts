import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoneJsComponent } from './zone-js.component';

const routes: Routes = [
  {
    path: '',
    component: ZoneJsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class ZoneJsRoutingModule {

}
