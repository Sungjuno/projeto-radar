import { FormGroup, AbstractControl } from '@angular/forms';
// Pedidos (id, cliente_id, valor_total, data)
// PedidosProdutos (id, pedido_id, produto_id, valor, quantidade)

export interface IPedidoProdutoForm extends FormGroup{
  value: IPedidoProduto,
  controls:{
    id:AbstractControl,
    pedido_id:AbstractControl,
    produto_id:AbstractControl,
    valor:AbstractControl,
    quantidade:AbstractControl
  }
}

export interface IPedidoProduto{
  id:number,
  pedido_id:string,
  produto_id:string,
  valor:number,
  quantidade:number
}
