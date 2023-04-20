import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselDirectiveComponent } from './carousel-directive.component';

const routes: Routes = [
  {
    path: '',
    component: CarouselDirectiveComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CarouselDirectiveRoutingModule {
}
