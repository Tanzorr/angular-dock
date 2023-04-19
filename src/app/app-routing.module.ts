import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructureDirectivesComponent } from './pages/structure-directives/structure-directives.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    children: [ {
      path: 'attribute-directives',
      loadChildren: () => import('./pages/attribute-directives/attribute-directives.module').then(m => m.AttributeDirectives)
    },
      {
        path: 'structure-directive',
        loadChildren: () => import('./pages/structure-directives/structure-directives.module').then(m => m.StructureDirectivesModule)
      }
    ]
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
