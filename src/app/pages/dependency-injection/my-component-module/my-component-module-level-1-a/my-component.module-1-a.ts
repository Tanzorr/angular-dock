import { MyModule } from "../../module/my.module";
import { MyComponentClass1A } from "./my-component-class-1-a";
import { ServiceForModuleF } from "../../services/service-for-module-f";

@MyModule(
  [MyComponentClass1A],
  [],
  [ServiceForModuleF]
)
export class MyComponentModule1A {}
