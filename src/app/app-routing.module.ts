import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructureDirectiveComponent } from './pages/structure-direcive/structure-directive.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    children: [ {
      path: 'attribute-directive',
      loadChildren: () => import('./pages/attribute-directive/attribute-directive.module').then(m => m.AttributeDirectionless)
    } ]
  } ];

// { path: 'structure-directive', component: StructureDirectiveComponent }
//];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
