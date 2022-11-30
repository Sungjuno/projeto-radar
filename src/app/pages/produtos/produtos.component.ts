import { IProdutoForm } from './../../models/produto.interface';
import { RequestService } from 'src/app/shared/request/request.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private request: RequestService) { }

  ngOnInit(): void {
  }

  produtoForm = this.fb.group ({
    id: [0],
    nome: [''],
    descricao: [''],
    valor: [0],
    qtdEstoque: [0]
  }) as IProdutoForm

  cadastrarProduto(){
    console.log(this.produtoForm.value)
    this.request.postProduto(this.produtoForm.value)
    .subscribe(res => console.log(res))
  }
}
