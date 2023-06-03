import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'reflect-metadata';

@Reflect.metadata('key', 'value')
@Injectable({
  providedIn: 'root'
})
export class PlaceHolderService {

  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getList(): Observable<any[]> {
    const url = `${this.baseUrl}/posts`;
    return this.http.get<any[]>(url);
  }

  getPosts() {
    return undefined;
  }
}
