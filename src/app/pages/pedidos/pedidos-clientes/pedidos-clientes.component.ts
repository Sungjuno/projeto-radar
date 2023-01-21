import { take } from 'rxjs';
import { PedidosRequestService } from 'src/app/shared/request/pedidos.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClientesRequestService } from 'src/app/shared/request/clientes.service';

@Component({
  selector: 'app-pedidos-clientes',
  templateUrl: './pedidos-clientes.component.html',
  styleUrls: ['./pedidos-clientes.component.css']
})
export class PedidosClientesComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private pedidoReq: PedidosRequestService,
    private clienteReq: ClientesRequestService,
    ) { }

    listaDeClientes:any = []
    listaFiltrado:any[] = []

  ngOnInit(): void {
    this.getListaClientes()
    // this.pedidoClienteForm.valueChanges.subscribe(value => value.cliente_id)
  }


  pedidoClienteForm = this.fb.group({
    id: [0],
    cliente_id: [''],
    valor_total: [0],
    data: [Date]
  })

  cadastrarPedidoCliente(){
    this.pedidoReq.postPedido(this.pedidoClienteForm.value)
    .subscribe(res => console.log(res))
    this.resetForm()
  }

  getListaClientes(){
    this.clienteReq.getCliente()
    .pipe(take(1))
    .subscribe(
      res => this.listaDeClientes = res)
  }

  resetForm() {
    this.pedidoClienteForm.reset();
  }

}
