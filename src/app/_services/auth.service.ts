import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import User from "../_interfaces/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient
  ) { }

  login(user: User): Observable<any> {
    const headers: { [header: string]: string | string[] } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    return this.http.post('https://127.0.0.1:8000/login', user, {headers});
  }

  register(user: User): Observable<any> {
    const headers: { [header: string]: string | string[] } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    return this.http.post('https://127.0.0.1:8000/register', user, {headers});
  }
}
