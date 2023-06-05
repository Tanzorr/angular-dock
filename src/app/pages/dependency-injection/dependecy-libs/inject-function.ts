import { INJECT_METADATA_KEY, INJECTABLE_METADATA_KEY } from './dependency-inject.model';


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
