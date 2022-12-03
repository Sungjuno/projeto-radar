import { AuthService } from './../../shared/auth/auth.service';
import { IProdutoForm } from '../../shared/models/produto.interface';
import { RequestService } from 'src/app/shared/request/request.service';
import { FormBuilder } from '@angular/forms';
import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private request: RequestService,
    public auth: AuthService) { }

  ngOnInit(): void {
  }

  produtoForm = this.fb.group ({
    id: [0],
    nome: [''],
    descricao: [''],
    valor: [0],
    qtd_estoque: [0]
  }) as IProdutoForm

  cadastrarProduto(){
    console.log(this.produtoForm.value)
    this.request.postProduto(this.produtoForm.value)
    .pipe(take(1))
    .subscribe()
  }
}
