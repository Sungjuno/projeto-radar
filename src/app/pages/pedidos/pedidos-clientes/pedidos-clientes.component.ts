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

    valotTotalPedido = 1200
    listaDeClientes:any = []
    listaFiltrado:any = []
    filterText = ''

  ngOnInit(): void {
    // this.listaFiltrado = this.listaDeClientes
  }


  pedidoClienteForm = this.fb.group({
    id: [0],
    cliente_id: [''],
    valor_total: [0],
    data: [Date]
  })

  cadastrarPedidoCliente(){
    console.log(this.pedidoClienteForm.value)
    this.req.postPedidoCliente(this.pedidoClienteForm.value)
    .subscribe(res => console.log(res))
    // console.log(this.pedidoClienteForm.value )
  }


  // listaClientes(){
  //   this.req.getCliente()
  //   .pipe(
  //     take(1),
  //       finalize( ()=> this.listaFiltrado = this.listaDeClientes )
  //       )
  //     .subscribe(
  //       res => this.listaDeClientes = <ICliente[]>res)
  // }


  // get filterTexto(){
  //   return this.pedidoClienteForm.value.clienteId
  // }

  // set filterTexto(value: any){
  //   this.pedidoClienteForm.value.clienteId = value;
  //   this.listaFiltrado = this.filtraClientes(value)
  // }


  // filtraClientes(valorFiltro:string){
  //   if(this.listaDeClientes.length === 0 || valorFiltro === ''){
  //     return this.listaDeClientes
  //   }else{
  //     return this.listaDeClientes.filter(
  //       (filtrado:ICliente) => {
  //         return filtrado.email === valorFiltro.toLowerCase()
  //       })
  //   }
  // }
}
