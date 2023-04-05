import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooComponent } from './components/foo/foo.component';
import { DirectiveForTemplateModule } from './directiva-for-template/directive-for-template.module';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectiveForTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
