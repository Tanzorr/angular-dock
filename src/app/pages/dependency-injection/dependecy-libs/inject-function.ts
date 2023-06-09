import { INJECT_METADATA_KEY, INJECTABLE_METADATA_KEY } from './dependency-inject.model';
import { Injector, PROVIDERS, PROVIDERS_MAP } from './injector';
import { Provider } from './provider';
import 'reflect-metadata'

export function Injectable() {
  return function(target: Function){
    Reflect.defineMetadata(INJECTABLE_METADATA_KEY, true, target);
  }
}

export function Inject(token: any) {
  return function(target: Function, propertyKey: string, parameterIndex: number) {
    const existingParametersTokens: Array<any> = Reflect.getOwnMetadata(INJECT_METADATA_KEY, target) || [];

    existingParametersTokens[parameterIndex] = token;
    Reflect.defineMetadata(INJECT_METADATA_KEY, existingParametersTokens, target)
  }
}

export function addToProviders(provide: string, useClass: Function) {
  PROVIDERS.push(new Provider({provide, useClass}));
  setProvidersMap(PROVIDERS);
}

export function setProvidersMap(providers: Provider[]) {
  providers.forEach((provider: Provider, index) => {
    PROVIDERS_MAP.set(provider.token, provider.dependency);
  });
}

export function injectService(service: Function) {
  return new Injector().get(service);
}
