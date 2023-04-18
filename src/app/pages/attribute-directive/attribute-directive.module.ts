import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { FooModule } from '../../components/foo/foo.module';
import { ContentProjectionsModule } from '../../components/content-prjections/content-projections.module';
import { AppModule } from '../../app.module';
import { ForTemplateModule } from '../../components/for-template/for-template.module';
import { AttributeDirectiveRoutingModule } from './attribute-directive-routing.module';




// @ts-ignore
@NgModule({
  declarations: [
    AttributeDirectiveComponent,
  ],
  imports: [
    CommonModule,
    FooModule,
    ContentProjectionsModule,
    AttributeDirectiveRoutingModule,
    ForTemplateModule
  ]

})
export class AttributeDirectionless { }
