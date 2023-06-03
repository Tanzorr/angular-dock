import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyInjectionComponent } from './dependency-injection.component';
import { InjectRoutingModule } from './injection-routing.module';



@NgModule({
  declarations: [
    DependencyInjectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DependencyInjectionComponent
  ]
})
export class DependencyInjectionModule { }
