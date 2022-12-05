import { FormGroup, AbstractControl } from '@angular/forms';
// Pedidos (id, cliente_id, valor_total, data)
// PedidosProdutos (id, pedido_id, produto_id, valor, quantidade)


export interface IPedidoClienteForm extends FormGroup{
  value: IPedidoCliente,
  controls:{
    id: AbstractControl,
    cliente_id: AbstractControl,
    valor_total: AbstractControl,
    data: AbstractControl
  }
}


export interface IPedidoCliente {
  id: number,
  cliente_id: string,
  valor_total: number,
  data: any
}
