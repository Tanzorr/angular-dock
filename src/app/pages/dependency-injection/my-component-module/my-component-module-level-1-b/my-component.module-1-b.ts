import { MyModule } from "../../module/my.module";
import { MyComponentClass1B } from "./my-component-class-1-b";
import { ServiceForModuleC } from "../../services/service-for-module-c";
import { ServiceForModuleD } from "../../services/service-for-module-d";

// @ts-ignore
@MyModule(
  [MyComponentClass1B],
  [],
  [ServiceForModuleC, ServiceForModuleD]
)
export class MyComponentModule1B{}
