import { Injector } from "../dependecy-libs/injector";
import { addToProviders } from "../dependecy-libs/inject-function";

export function MyModule(
  resolveClasses: any[],
  imports: any[],
  providers: any[]
) {
  return function (target: any) {
    target.resolvedClasses = new Map<string, Function>();

    target._injector = new Injector();
    // add resolver class function
    if (resolveClasses.length > 0) {
      resolveClasses?.forEach((resolveClass: Function) => {
        // @ts-ignore
        const resolvedClass = target._injector.get(resolveClass);
        target.resolvedClasses.set(resolveClass.toString(), resolvedClass);
      });
    }

    target.importedModules = new Map<string, Function>();
    // add import module function
    if (imports?.length > 0) {
      imports.forEach((importModule: Function) => {
        // @ts-ignore
        const importedModule = Injector.get(importModule);
        target.importedModules.set(importModule.toString(), importedModule);
      });
    }

    // add import other module
    // this module should have accesses to all providers in this module

    // add providers
    target.providers = providers = [];

    target.providers.forEach((provider: Function) => {
      addToProviders(provider.toString(), provider);
    });

    console.log('target', target, target.providers, providers)
  };
}
