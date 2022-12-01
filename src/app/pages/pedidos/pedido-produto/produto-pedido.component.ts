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

  pedidoProdutoForm = this.fb.group({
    id: [0],
    pedidoId: [''],
    produtoId: [''],
    valor: [0],
    quantidade:[0]
  })

  cadastrarPedidoProduto(){
    console.log(this.pedidoProdutoForm.value)
    this.req.postPedidoProduto(this.pedidoProdutoForm.value)
    .subscribe(res => console.log(res))
    // console.log(this.pedidoClienteForm.value )
  }


}
