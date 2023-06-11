import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyInjectionComponent } from './dependency-injection.component';
import {DependencyInjectionRoutingModule} from "./dependency-injection-routing.module";


@NgModule({
  declarations: [
    DependencyInjectionComponent
  ],
  imports: [
    CommonModule,
    DependencyInjectionRoutingModule
  ],
  exports: [
    DependencyInjectionComponent
  ]
})
export class DependencyInjectionModule { }
