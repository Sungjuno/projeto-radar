import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setLogin(usuario:string){
    localStorage.setItem( 'usuario', usuario)
    console.log(usuario)
  }

  getLogin(){
    let usuario = localStorage.getItem('usuario')
    if(usuario){
      console.log('existe')
    }
    return null
  }

  verificaLogado(): boolean{
    return localStorage.getItem('usuario') ? true : false
  }
}
