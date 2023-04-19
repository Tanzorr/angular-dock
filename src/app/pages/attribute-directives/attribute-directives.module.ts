import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectivesComponent } from './attribute-directives.component';
import { FooModule } from '../../components/foo/foo.module';
import { ContentProjectionsModule } from '../../components/content-prjections/content-projections.module';
import { AttributeDirectiveRoutingModule } from './attribute-directive-routing.module';


// @ts-ignore
@NgModule({
  declarations: [
    AttributeDirectivesComponent,
  ],
  imports: [
    CommonModule,
    FooModule,
    ContentProjectionsModule,
    AttributeDirectiveRoutingModule
  ]
})
export class AttributeDirectives { }
