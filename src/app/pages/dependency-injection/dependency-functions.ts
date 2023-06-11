import 'reflect-metadata'
import { Injectable, Inject, addToProviders, MyModule } from './dependecy-libs/inject-function';
import { Injector } from './dependecy-libs/injector';


// @ts-ignore
export function run() {
  @Injectable()
  class GreeterService {
    sayHello(): void {
      console.log('Hello!');
    }
  }

  @Injectable()
  class MockGreeterService {
    sayHello(): void {
      console.log('Hola!');
    }
  }

  let uniqId = 0;

  @Injectable()
  class MyService {
    id: number;

    constructor(@Inject('GreeterService') private _greeterService: GreeterService) {
      this.id = uniqId++;
    }

    init(): void {
      this._greeterService.sayHello();
    }
  }

  addToProviders('GreeterService', MockGreeterService)

  const injector = new Injector();
  const myService = injector.get(MyService);
// @ts-ignore
  myService.init();
}

