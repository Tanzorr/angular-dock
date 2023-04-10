import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooComponent } from './components/foo/foo.component';
import { DirectiveForTemplateModule } from './components/directiva-for-template/directive-for-template.module';
import { ContentProjectionsModule } from './components/content-prjections/content-projections.module';
import { UnlessDirective } from './unless.directive';
import { NestedForDirective } from './nested-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    UnlessDirective,
    NestedForDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectiveForTemplateModule,
    ContentProjectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
