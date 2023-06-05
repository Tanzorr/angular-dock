import { INJECT_METADATA_KEY, INJECTABLE_METADATA_KEY } from './dependency-inject.model';
import { Provider } from './provider';
import 'reflect-metadata'

export const PROVIDERS: Provider[] = []

export const PROVIDERS_MAP:Map<string, Function> = PROVIDERS.reduce((map: Map<string, Function>, provider: Provider) => {
  map.set(provider.token, provider.dependency);

  return map;
}, new Map());

//export let PROVIDERS_MAP:Map<string, Function>

export class Injector {
  private _instances = new Map();

  get<T>(target: Function | undefined): T {
    // @ts-ignore
    const isInjectable = Reflect?.getMetadata(INJECTABLE_METADATA_KEY, target);

    if (!isInjectable) {

      // @ts-ignore
      throw new Error(`${target.name} is not injectable`);
    }

    if (this._instances.get(target)) {
      return this._instances.get(target);
    }

    // @ts-ignore
    const parameters = Reflect?.getMetadata(INJECT_METADATA_KEY, target);

    console.log('parameters',parameters, PROVIDERS_MAP)
    const dependencies = parameters
      ? parameters.map((token: string) => this.get(PROVIDERS_MAP.get(token)))
      : [];
    // @ts-ignore
    const instance = new target(...dependencies);

    this._instances.set(target, instance);

    return instance;
  }
}
