import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILoja } from 'src/app/shared/models/loja.interface';

@Injectable({
  providedIn: 'root'
})
export class LojaRequestService {

  constructor( private http: HttpClient ) { }

  getLoja(){
    let lojas = this.http.get(environment.url + 'lojas')
    return lojas
  }
  postLoja(loja:ILoja){
    console.log('post no request ' + loja )
    return this.http.post<ILoja>(environment.url + 'lojas/',loja)
  }

  updateLoja(loja:ILoja){
    return this.http.put<ILoja>(environment.url + 'lojas/',loja)
  }

  deleteLoja(id:number){
    return this.http.delete<ILoja>(environment.url + `lojas/${id}`)
  }
}
