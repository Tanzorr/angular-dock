import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import 'reflect-metadata';
import { addToProviders, Inject, Injectable } from "./dependecy-libs/inject-function";
import { UserService } from "./services/user.service";
import { CashUserService } from "./services/cash-user-service";
import { Injector } from "./dependecy-libs/injector";
import { MyModule } from "./module/my.module";
import { MyComponentModule } from "./my-component-module/my-component.module";



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

@Injectable()
class UserManager {
  constructor(
    @Inject('UserService') private _userService: UserService,
    @Inject('CashUserService') private _cashUserService: CashUserService
  ) {
  }

  async getUser(id: number): Promise<any> {
    let user = this._cashUserService.get(id);

    if (!user) {
      user = await this._userService.getById(id);
      this._cashUserService.set(id, user);
    }
    return user;
  }
}

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: [ './dependency-injection.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DependencyInjectionComponent implements OnInit {
  users: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    new MyComponentModule();
  }

  getUserById(id: string): void {
    if (!id) {
      return;
    }

    const injector = new Injector();

    addToProviders('UserService', UserService);
    addToProviders('CashUserService', CashUserService);
    addToProviders('UserManager', UserManager);

    const userManager = injector.get<UserManager>(UserManager);

    userManager.getUser(+id).then((user) => {
      this.users.push(user);
    });
  }
}
