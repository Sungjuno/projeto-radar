export interface Pedido {
    id: number,
    nome: string,
    descricao: string | undefined,
    valor: number,
    qtd_estoque: number
}