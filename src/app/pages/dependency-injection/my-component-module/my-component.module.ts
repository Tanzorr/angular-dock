import { MyModule } from "../module/my.module";
import { MyModuleClass } from "./my-component-class";
import { ServiceForModuleA } from "../services/service-for-module-a";
import { ServiceForModuleB } from "../services/service-for-module-b";
import { MyComponentModule1A } from "./my-component-module-level-1-a/my-component.module-1-a";
import { MyComponentModule1B } from "./my-component-module-level-1-b/my-component.module-1-b";

// @ts-ignore
@MyModule({
  declarations: [ MyModuleClass ],
  imports: [MyComponentModule1A, MyComponentModule1B],
  providers: [
    ServiceForModuleA,
    ServiceForModuleB
  ]
})
export class MyComponentModule {
}
