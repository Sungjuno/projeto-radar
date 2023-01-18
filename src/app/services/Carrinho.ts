import { RequestService } from "../shared/request/request.service";
import { IPedidoProduto } from "../shared/models/pedido-produto.interface";
import { HttpClient } from "@angular/common/http";
import { IPedido } from "../shared/models/pedido.interface";
import { IProduto } from "../shared/models/produto.interface";

export class Carrinho{

    private static carrinho: (IPedidoProduto)[]=[{"id":201,"pedido_id":2,"produto_id":1,"valor":10,"quantidade":2},
    {"id":202,"pedido_id":2,"produto_id":2,"valor":10,"quantidade":2}];
    private static id:number=0;
    private static pedido: IPedido={"id":2,"cliente_id":3,"valor_total":40,"data":new Date((new Date()).getTime())};
    
    public static buscaTamanho():number{
        return Carrinho.carrinho.length;
    }

    public static setCliente_Id(id:number):void{
        this.pedido.cliente_id=id;
    }

    public static listar():(IPedidoProduto)[]{
        return Carrinho.carrinho;
    }

    public static setPedido(cliente_id:number){
        Carrinho.pedido.cliente_id=cliente_id;
    }

    public static adicionaPedidoProduto(produto: IProduto):void{
        let existePedidoProduto = Carrinho.verifica(produto.id);
        
        if(existePedidoProduto > -1){
            if(Number(Carrinho.carrinho[existePedidoProduto].quantidade) < Number(produto.qtd_estoque))
                Carrinho.carrinho[existePedidoProduto].quantidade = Number(Carrinho.carrinho[existePedidoProduto].quantidade) + 1;
        }else{
            let pedidoProduto={} as IPedidoProduto;
            Carrinho.id++;
            pedidoProduto.quantidade=1
            pedidoProduto.id=Carrinho.id;
            pedidoProduto.produto_id=produto.id;
            pedidoProduto.valor=produto.valor;
            Carrinho.carrinho.push(pedidoProduto);
        }
     }

    public static verifica(produtoId : Number) : number{
        for (let i = 0; i < Carrinho.carrinho.length; i++) {
            const item = Carrinho.carrinho[i];
            if(item.produto_id.toString() === produtoId.toString()){
                 return i
            }
        }
        return -1
    }

    public static excluirProduto(id:number):void{
        console.log(Carrinho.carrinho);
        let item=Carrinho.carrinho.splice(id,1);
        }

    public static getValor_Total():number{
        let total=0;
        Carrinho.carrinho.forEach(item=>{
            total+=item.quantidade*item.valor;
        })
        return Carrinho.pedido.valor_total=total;
    }

    public static async salvar(http:HttpClient):Promise<void>{
        //Implementar
    }

    public static reset(){
        while(this.carrinho.length>0){
            this.carrinho.pop();
        }
    }
}