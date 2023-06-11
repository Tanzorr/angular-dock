import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DependencyInjectionComponent} from "./dependency-injection.component";


const routes: Routes = [
  {
    path: '',
    component: DependencyInjectionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DependencyInjectionRoutingModule {
}
