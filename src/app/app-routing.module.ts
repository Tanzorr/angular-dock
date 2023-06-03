import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [ {
      path: 'attribute-directives',
      loadChildren: () => import('./pages/attribute-directives/attribute-directives.module').then(m => m.AttributeDirectives),
      pathMatch: 'full'
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
      },
      {
        path: 'zone-js',
        loadChildren: () => import('./pages/zone-js/zone-js.module').then(m => m.ZoneJsModule)
      },
      {
        path: 'event-loop',
        loadChildren: () => import('./pages/event-loop/event-loop.module').then(m => m.EventLoopModule)
      },
      {
        path: 'change-detection-strategies',
        loadChildren: () => import('./pages/change-detection-strategies/change-detection-strategies.module').then(m => m.ChangeDetectionStrategiesModule)
      },
      {
        path: 'dependency-injection',
        loadChildren: () => import('./pages/dependency-injection/dependency-injection.module').then(m => m.DependencyInjectionModule)
      },
      {
        path: '',
        redirectTo: 'attribute-directives',
        pathMatch: 'full'
      }
    ],
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
