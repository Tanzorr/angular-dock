import { Injector } from "../dependecy-libs/injector";
import { addToProviders } from "../dependecy-libs/inject-function";

export function MyModule(
  resolveClasses: Function[],
  imports: Function[],
  providers: Function[]
) {
  return function (target: Function) {
    target.prototype.resolvedClasses = new Map<string, Function>();

    target.prototype._injector = new Injector();
    // add resolver class function
    if (resolveClasses.length > 0) {
      resolveClasses?.forEach((resolveClass: Function) => {
        // @ts-ignore
        const resolvedClass = target.prototype._injector.get(resolveClass);
        target.prototype.resolvedClasses.set(resolveClass.toString(), resolvedClass);
      });
    }

    target.prototype.importedModules = new Map<string, Function>();
    // add import module function
    if (imports?.length > 0) {
      imports.forEach((importModule: Function) => {
        // @ts-ignore
        const importedModule = Injector.get(importModule);
        target.prototype.importedModules.set(importModule.toString(), importedModule);
      });
    }

    // add import other module
    // this module should have accesses to all providers in this module

    // add providers
    target.prototype.providers = providers = [];

    target.prototype.providers.forEach((provider: Function) => {
      addToProviders(provider.toString(), provider);
    });
  };
}
