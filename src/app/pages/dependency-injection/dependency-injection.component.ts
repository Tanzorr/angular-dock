import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import 'reflect-metadata';
import { run } from './dependency-functions';
import {Injectable, MyModule} from "./dependecy-libs/inject-function";


@Injectable()
class Dependency1 {
  doSomething() {
    console.log('Dependency1 - Doing something');
  }
}
@Injectable()
class Dependency2 {
  doSomethingElse() {
    console.log('Dependency2 - Doing something else');
  }
}
@Injectable()
class MyClass {

  constructor(private _dependency1: Dependency1, private _dependency2: Dependency2) {
  }

  myMethod() {
    this._dependency1.doSomething();
    this._dependency2.doSomethingElse();
  }
}

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DependencyInjectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myClass = new MyClass(new Dependency1(), new Dependency2());
    myClass.myMethod();
  }
}
