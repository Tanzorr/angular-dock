import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionStrategiesComponent } from './change-detection-strategies.component';

const routes: Routes = [
  {
    path: '',
    component: ChangeDetectionStrategiesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChangeDetectionStrategiesRoutingModule {
}
