import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
      },
      {
        path: 'reference-variables',
        loadChildren: () => import('./pages/reference-variables/reference-variables.module').then(m => m.ReferenceVariablesModule)
      },
      {
        path: 'carousel-directive',
        loadChildren: () => import('./pages/carousel-directive/carousel-directive.module').then(m => m.CarouselDirectiveModule)
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
