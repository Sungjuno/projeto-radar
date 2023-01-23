import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILogin } from '../models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginRequestService {

  constructor( private http: HttpClient ) { }

  postLogin(login:ILogin){
    console.log(environment.url + 'login',login)
    return this.http.post<ILogin>(environment.url + 'login',login)
  }
}
