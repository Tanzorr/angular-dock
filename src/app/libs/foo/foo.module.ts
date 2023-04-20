import { NgModule } from '@angular/core';
import { FooComponent } from './foo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ FooComponent ],
  imports: [ CommonModule ],
  exports: [
    FooComponent
  ]
})
export class FooModule {
}
