import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventLoopComponent } from './event-loop.component';
import { EventLoopRoutingModule } from './event-loop-routing.module';



@NgModule({
  declarations: [
    EventLoopComponent
  ],
  imports: [
    CommonModule,
    EventLoopRoutingModule
  ]
})
export class EventLoopModule { }
