import { PedidoService } from './../../services/pedido.service';
import { Pedido } from './../../interfaces/Pedido';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  public title:string = "";
  public quantidade:number = 0;
  public carrinho:Pedido[] = [

  ]
  public pedidos:Pedido[] = PedidoService.getPedidos();
  telaPedido = true;

  constructor(
    private pedidoService:PedidoService
  ) { }

  ngOnInit(): void {
  }

  alterarTela() {
    if(this.telaPedido){
      this.telaPedido = false;
    } else {
      this.telaPedido = true;
    }
    return
  }

  aumentaQtd() {
    this.quantidade++
  }

  diminuiQtd() {
    this.quantidade--
  }

  adicionarCarrinho(produto:Pedido) {
    this.carrinho.push(produto);
    this.alterarTela();
  }

  removeCarrinho(item:Pedido) {
    for (let itemCarrinho of this.carrinho) {
      if (itemCarrinho === item) {
        let index = this.carrinho.indexOf(item);
        this.carrinho.splice(index, 1);
      }
    }
  }

}
