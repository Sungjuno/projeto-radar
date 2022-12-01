// Pedidos (id, cliente_id, valor_total, data)
// PedidosProdutos (id, pedido_id, produto_id, valor, quantidade)

export interface IPedidoCliente {
  id: number,
  clienteId: number,
  valorTotal: number,
  data: Date
}
