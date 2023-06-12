import {Injectable} from "../dependecy-libs/inject-function";

@Injectable()
export class UserService {
 private _baseUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(){}

  getAll(): Promise<any> {
    return fetch(this._baseUrl).then((response) => response.json());
  }

  getById(id: number): Promise<any> {
    return fetch(`${this._baseUrl}/${id}`).then((response) => response.json());
  }

}
