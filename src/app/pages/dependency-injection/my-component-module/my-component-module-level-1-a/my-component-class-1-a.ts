import { ServiceForModuleF } from "../../services/service-for-module-f";
import { Injectable } from "../../dependecy-libs/inject-function";


@Injectable()
export class MyComponentClass1A {
  constructor(private serviceForModuleF: ServiceForModuleF) {
    console.log('MyComponentClass1A constructor');
  }

  public doSomething(): void {
    console.log('MyComponentClass1A did something');
    this.serviceForModuleF.doSomething();
  }
}
