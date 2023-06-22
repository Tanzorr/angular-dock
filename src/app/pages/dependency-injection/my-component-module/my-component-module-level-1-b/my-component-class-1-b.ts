import { ServiceForModuleD } from "../../services/service-for-module-d";
import { ServiceForModuleC } from "../../services/service-for-module-c";
import { Injectable } from "../../dependecy-libs/inject-function";

@Injectable()
export class MyComponentClass1B {
  constructor(private serviceForModuleD: ServiceForModuleD, private serviceForModuleC: ServiceForModuleC) {
    console.log('MyComponentClass1B');
  }

  public doSomething(): void {
    console.log('MyComponentClass1B did something');
    this.serviceForModuleD.doSomething();
    this.serviceForModuleC.doSomething();
  }
}
