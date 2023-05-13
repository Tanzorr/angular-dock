import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategiesComponent } from './change-detection-strategies.component';
import { ChangeDetectionStrategiesRoutingModule } from './change-detection-strategies-routing.module';



@NgModule({
  declarations: [
    ChangeDetectionStrategiesComponent
  ],
  imports: [
    CommonModule,
    ChangeDetectionStrategiesRoutingModule
  ]
})
export class ChangeDetectionStrategiesModule { }
