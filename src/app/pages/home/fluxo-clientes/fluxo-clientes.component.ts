import { take, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/request/request.service';

@Component({
  selector: 'app-fluxo-clientes',
  templateUrl: './fluxo-clientes.component.html',
  styleUrls: ['./fluxo-clientes.component.css']
})
export class FluxoClientesComponent implements OnInit {

  constructor( private req: RequestService) { }

  ngOnInit(): void {
    this.chamaApiClientes()
    this.chamaApiProduto()
  }

  clientes: number = 0
  produtos: number = 0

  chamaApiClientes(){
    this.req.getCliente()
    .pipe(take(1))
    .subscribe( res => this.quantidadeClientes(res))
  }

  chamaApiProduto(){
    this.req.getProduto()
    .pipe(take(1))
    .subscribe( res => this.quantidadeProduto(res))
  }

  quantidadeClientes(res:any){
   this.clientes = res.length
  }

  quantidadeProduto(res:any){
    this.produtos = res.length
  }
}
