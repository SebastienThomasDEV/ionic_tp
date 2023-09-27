import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Accept', 'application/json');
    return this.http.post('https://127.0.0.1:8000/login', user, {headers});
  }

  register(user: User): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Accept', 'application/json');
    return this.http.post('https://127.0.0.1:8000/register', user,  {headers});
  }
}
