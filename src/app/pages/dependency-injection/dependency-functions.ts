import 'reflect-metadata'
import { INJECT_METADATA_KEY, INJECTABLE_METADATA_KEY } from './dependecy-libs/dependency-inject.model';
import { Provider } from './dependecy-libs/provider';
import { Injectable, Inject } from './dependecy-libs/inject-function';


export function run(){
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

  const PROVIDERS = [
    new Provider({
      provide: 'GreeterService',
      useClass: MockGreeterService
    })
  ];
  const PROVIDERS_MAP = PROVIDERS.reduce((map: Map<string, Function>, provider: Provider) => {
    map.set(provider.token, provider.dependency);

    return map;
  }, new Map());

  class Injector {
    private _instances = new Map();

    get<T>(target: Function | undefined): T {
      // @ts-ignore
      const isInjectable = Reflect.getMetadata(INJECTABLE_METADATA_KEY, target);

      if (!isInjectable) {
        // @ts-ignore
        throw new Error(`${target.name} is not injectable`);
      }

      if (this._instances.get(target)) {
        return this._instances.get(target);
      }

      // @ts-ignore
      const parameters = Reflect.getMetadata(INJECT_METADATA_KEY, target);
      const dependencies = parameters
        ? parameters.map((token: string) => this.get(PROVIDERS_MAP.get(token)))
        : [];
      // @ts-ignore
      const instance = new target(...dependencies);

      this._instances.set(target, instance);

      return instance;
    }
  }

  const injector = new Injector();
  const myService = injector.get(MyService);

// @ts-ignore
  myService.init();
}

