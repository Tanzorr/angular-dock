import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveForTemplateModule } from './libs/directiva-for-template/directive-for-template.module';
import { ContentProjectionsModule } from './libs/content-prjections/content-projections.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectiveForTemplateModule,
    ContentProjectionsModule,
    FormsModule,
    HttpClientModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
