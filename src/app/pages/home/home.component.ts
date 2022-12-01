import { IProduto } from '../../shared/models/produto.interface';
import { ICliente } from '../../shared/models/cliente.interface';
import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { RequestService } from 'src/app/shared/request/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private req: RequestService) { }

  ngOnInit(): void {
    this.chamaCliente()
    this.chamaProduto()
    this.chamaPedidoCliente()
    this.chamaPedidoProduto()
  }

  listaClientes:ICliente[] = [];
  listaProduto:IProduto[] = [];
  listaPedidoCliente:any[] = [];
  listaPedidoProduto:any[] = [];

  chamaCliente(){
    this.req.getCliente()
    .pipe(take(1))
    .subscribe(
      res => this.listaClientes = <Array<ICliente>>res )
  }

  chamaProduto(){
    this.req.getProduto()
    .pipe(take(1))
    .subscribe(res => this.listaProduto = <Array<IProduto>>res)
  }

    chamaPedidoCliente(){
    this.req.getPedidoCliente()
    .pipe(take(1))
    .subscribe(res => this.listaPedidoCliente = <Array<any>>res)
  }

  chamaPedidoProduto(){
    this.req.getPedidoProduto()
    .pipe(take(1))
    .subscribe(res => this.listaPedidoProduto = <Array<any>>res)
  }

}
