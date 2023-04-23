import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselDirectiveComponent } from './carousel-directive.component';
import { CarouselDirectiveRoutingModule } from './carousel-directive-routing.module';
import { CarouselModule } from '../../libs/carousel/carousel.module';
import { IncexControlModule } from '../../libs/index-control/incex-control.module';


@NgModule({
  declarations: [
    CarouselDirectiveComponent
  ],
  imports: [
    CommonModule,
    CarouselDirectiveRoutingModule,
    CarouselModule,
    IncexControlModule
  ]
})
export class CarouselDirectiveModule { }
