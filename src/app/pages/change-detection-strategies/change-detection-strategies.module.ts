import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategiesComponent } from './change-detection-strategies.component';
import { ChangeDetectionStrategiesRoutingModule } from './change-detection-strategies-routing.module';
import { ParentModule } from './parent/parent.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChangeDetectionStrategiesComponent
  ],
  exports: [
    ChangeDetectionStrategiesComponent
  ],
  imports: [
    CommonModule,
    ChangeDetectionStrategiesRoutingModule,
    ParentModule,
    FormsModule
  ]
})
export class ChangeDetectionStrategiesModule { }
