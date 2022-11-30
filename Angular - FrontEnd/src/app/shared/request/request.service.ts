import { ICliente } from './../../models/cliente.interface';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProduto } from 'src/app/models/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor( private http: HttpClient ) { }

  getCliente(){
    let a = this.http.get(environment.url + 'clientes')
    return a
  }
  postCliente(cliente:ICliente){
    return this.http.post<ICliente>(environment.url + 'clientes/',cliente)
  }

  updateCliente(cliente:ICliente){
    return this.http.put<ICliente>(environment.url + 'clientes/',cliente)
  }



  getProduto(){
    let a = this.http.get(environment.url + 'produtos')
    return a
  }
  postProduto(produto:IProduto){
    console.log('post no request ' + produto )
    return this.http.post<IProduto>(environment.url + 'produtos/',produto)
  }

  updateProduto(produto:IProduto){
    return this.http.put<IProduto>(environment.url + 'produtos/',produto)
  }
}
