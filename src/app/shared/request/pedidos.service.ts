import { IPedido } from '../models/pedido.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  url = environment.url

  constructor(private http: HttpClient) { }

  getPedidos() {
    return this.http.get<IPedido[]>(this.url + "pedidos")
  }

}
