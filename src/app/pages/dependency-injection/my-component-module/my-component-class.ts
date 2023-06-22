import { ServiceForModuleA } from "../services/service-for-module-a";
import { ServiceForModuleB } from "../services/service-for-module-b";
import { Injectable } from "../dependecy-libs/inject-function";

@Injectable()
export class MyModuleClass {
  constructor(private serviceForModuleA: ServiceForModuleA, private serviceForModuleB: ServiceForModuleB) {
    console.log('MyModuleClass');
  }

  public doSomething(): void {
    console.log('MyModuleClass did something');
    this.serviceForModuleA.doSomething();
    this.serviceForModuleB.doSomething();
  }
}
