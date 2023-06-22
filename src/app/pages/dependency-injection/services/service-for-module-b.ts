
export class ServiceForModuleB {
    constructor() {
        console.log('ServiceForModuleB constructor');
    }
    public doSomething(): string {
        return 'ServiceForModuleB did something';
    }
}
