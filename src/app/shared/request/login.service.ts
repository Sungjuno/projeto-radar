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
    return this.http.get(environment.url + 'login')

  }
}
