import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategiesComponent } from './change-detection-strategies.component';
import { ChangeDetectionStrategiesRoutingModule } from './change-detection-strategies-routing.module';
import { ParentModule } from './parent/parent.module';
import { FormsModule } from '@angular/forms';
import { Branch1Module } from './branch1/branch1.module';
import { Branch2Module } from './branch2/branch2.module';
import { RandomBackgroundModule } from '../../libs/random-background/random-background.module';



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
    FormsModule,
    Branch1Module,
    Branch2Module,
    RandomBackgroundModule
  ]
})
export class ChangeDetectionStrategiesModule { }
