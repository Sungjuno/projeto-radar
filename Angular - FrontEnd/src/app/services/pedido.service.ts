import { Injectable } from '@angular/core';
import { Pedido } from '../interfaces/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor() { }

  private static listaPedidos:Pedido[] = [
    { id: 1, nome: "Banana", descricao: "", valor: 10.50, qtd_estoque: 7},
    { id: 2, nome: "Playstation 5", descricao: "", valor: 4989.90, qtd_estoque: 140},
    { id: 3, nome: "TV 4K", descricao: "", valor: 2100.00, qtd_estoque: 25},
    { id: 4, nome: "TV 2K", descricao: "", valor: 700.00, qtd_estoque: 14},
    { id: 5, nome: "TV 8K", descricao: "", valor: 10100.00, qtd_estoque: 2},
  ];

  public static getPedidos() {
    return this.listaPedidos;
  }

}
