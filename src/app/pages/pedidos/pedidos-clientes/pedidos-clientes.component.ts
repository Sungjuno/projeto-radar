import { take, finalize } from 'rxjs';
import { RequestService } from 'src/app/shared/request/request.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/shared/models/cliente.interface';

@Component({
  selector: 'app-pedidos-clientes',
  templateUrl: './pedidos-clientes.component.html',
  styleUrls: ['./pedidos-clientes.component.css']
})
export class PedidosClientesComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private req: RequestService
    ) { }

    listaDeClientes:any = []
    listaFiltrado:any[] = []

  ngOnInit(): void {
    this.getListaClientes()
    this.pedidoClienteForm.valueChanges.subscribe(value => value.cliente_id)
  }


  pedidoClienteForm = this.fb.group({
    id: [0],
    cliente_id: [''],
    valor_total: [0],
    data: [Date]
  })

  public getSearchCtrl(accountNumber:any) {
    return this.pedidoClienteForm.get(accountNumber)
  }

  cadastrarPedidoCliente(){
    this.req.postPedidoCliente(this.pedidoClienteForm.value)
    .subscribe(res => console.log(res))
    this.resetForm()
  }

  getListaClientes(){
    this.req.getCliente()
    .pipe(take(1))
    .subscribe(
      res => this.listaDeClientes = res)
  }

  resetForm() {
    this.pedidoClienteForm.reset();
  }

}
