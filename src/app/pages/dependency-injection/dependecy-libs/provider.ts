import 'reflect-metadata'

export class Provider {
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
