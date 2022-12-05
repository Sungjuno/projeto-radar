import { IPedidoProdutoForm } from './../../../shared/models/pedido-produto.interface';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/request/request.service';

@Component({
  selector: 'app-produto-pedido',
  templateUrl: './produto-pedido.component.html',
  styleUrls: ['./produto-pedido.component.css']
})
export class ProdutoPedidoComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private req: RequestService) { }

  ngOnInit(): void {
  }

  pedidoProdutoForm:IPedidoProdutoForm = this.fb.group({
    id: [0],
    pedido_id: [''],
    produto_id: [''],
    valor: [0],
    quantidade:[0]
  }) as IPedidoProdutoForm

  cadastrarPedidoProduto(){
    console.log(this.pedidoProdutoForm.value)
    this.req.postPedidoProduto(this.pedidoProdutoForm.value)
    .subscribe()
  }

}
