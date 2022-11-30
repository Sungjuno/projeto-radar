import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setLogin(usuario:string){
    localStorage.setItem( 'usuario', usuario)
    console.log(usuario)
  }

  setAdm(adm:string){
    localStorage.setItem('adm',adm)
    console.log(adm)
  }

  getLogin(){
    let usuario = localStorage.getItem('usuario')
    if(usuario){
      console.log('existe')
      return true
    }
    return null
  }

  verificaLogado(): boolean{
    return localStorage.getItem('usuario') ? true : false
  }
}
