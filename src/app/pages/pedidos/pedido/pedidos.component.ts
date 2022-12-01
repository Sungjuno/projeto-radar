import { PedidosService } from './../../../shared/request/pedidos.service';
import { IPedido } from '../../../shared/models/pedido.interface';
import { Component, OnInit } from '@angular/core';
import { mergeMap, take, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private pedidosService: PedidosService) {
    
  }

  ngOnInit(): void {
    this.carregarPedidos()

  }

  pedidos: IPedido[] = []
  config:any
  datas:any = []
  valores:any = []

  carregarPedidos() {
    this.pedidosService.getPedidos()
      .pipe(
        take(1), // O take fará com que a gente se DESINSCREVA após o SUBSCRIBE. Quando isso for resolvido 1 vez, vamos se desinscrever.
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  }

  onSuccess(response: IPedido[]) {
    this.pedidos = response;

    /* for (let pedido of this.pedidos) {
      this.nameOfMonth.push(pedido.data.getMonth())
    } */
  }

  onError(error: any) {
    console.log(error);
  }

}
