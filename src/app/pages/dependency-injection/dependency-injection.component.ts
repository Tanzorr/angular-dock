import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import 'reflect-metadata';
import { run } from './dependency-functions';



class Dependency1 {
  doSomething() {
    console.log('Dependency1 - Doing something');
  }
}

class Dependency2 {
  doSomethingElse() {
    console.log('Dependency2 - Doing something else');
  }
}

class MyClass {

  constructor(private _dependency1: Dependency1, private _dependency2: Dependency2) {
  }

  myMethod() {
    run()
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
    run()
  }

}
