import 'reflect-metadata'

export function run(){
  const INJECTABLE_METADATA_KEY = Symbol('Injectable');

  function Injectable() {
    return function(target: Function){
      Reflect.defineMetadata(INJECTABLE_METADATA_KEY, true, target);
    }
  }

  const INJECT_METADATA_KEY = Symbol('Inject');

  function Inject(token: any) {
    return function(target: Function, propertyKey: string, parameterIndex: number) {
      const existingParametersTokens: Array<any> = Reflect.getOwnMetadata(INJECT_METADATA_KEY, target) || [];

      existingParametersTokens[parameterIndex] = token;

      Reflect.defineMetadata(INJECT_METADATA_KEY, existingParametersTokens, target)
    }
  }

  class Provider {
    token: string;
    dependency: Function;

    constructor(value: {
      provide: string
      useClass: Function
    }) {
      this.token = value.provide;
      this.dependency = value.useClass;
    }
  }

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

