import { IPedido } from '../models/pedido.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosRequestService {

  url = environment.url

  constructor(private http: HttpClient) { }

  updatePedido(pedido:any){
    return this.http.put<any>(environment.url + 'pedidos/',pedido)
  }

  getPedido(){
    let pedidos = this.http.get(environment.url + 'pedidos')
    return pedidos
  }

  postPedido(pedido:any){
    console.log('post no request ' + pedido )
    return this.http.post<any>(environment.url + 'pedidos/',pedido)
  }

  deletePedido(id:number){
    return this.http.delete<IPedido>(environment.url + `pedidos/${id}`)
  }

}
