import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import {
  ChangeDetectionStrategiesComponent
} from '../change-detection-strategies/change-detection-strategies.component';
import { DependencyInjectionComponent } from './dependency-injection.component';

const routes: Routes = [
  {
    path: '',
    component: DependencyInjectionComponent
  }
];


// @ts-ignore
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export interface  InjectRoutingModule {
}
