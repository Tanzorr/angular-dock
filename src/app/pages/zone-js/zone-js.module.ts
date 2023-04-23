import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneJsComponent } from './zone-js.component';
import { ZoneJsRoutingModule } from './zone-js-routing.module';



@NgModule({
  declarations: [
    ZoneJsComponent
  ],
  imports: [
    CommonModule,
    ZoneJsRoutingModule
  ]
})
export class ZoneJsModule { }
