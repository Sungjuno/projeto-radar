import { ICliente } from '../models/cliente.interface';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidosProdutosRequestService {

  constructor( private http: HttpClient ) { }
  
  

  getPedidoProduto(){
    let pedidosProdutos = this.http.get(environment.url + 'pedidosProdutos')
    return pedidosProdutos
  }
  postPedidoProduto(pedidoProduto:any){
    console.log('post no request ' + pedidoProduto )
    return this.http.post<any>(environment.url + 'pedidosProdutos/',pedidoProduto)
  }

  updatePedidoProduto(pedidoProduto:any){
    return this.http.put<any>(environment.url + 'pedidosProdutos/',pedidoProduto)
  }
}
