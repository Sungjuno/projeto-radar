import { IProduto } from 'src/app/shared/models/produto.interface';
import { IProdutoForm } from '../../shared/models/produto.interface';
import { RequestService } from 'src/app/shared/request/request.service';
import { FormBuilder } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { p } from 'chart.js/dist/chunks/helpers.core';
import { take, tap } from 'rxjs';


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
    this.getProduto()
  }

  listaProduto:IProduto[] = []

  produtoForm = this.fb.group ({
    id: [0],
    nome: [''],
    descricao: [''],
    valor: [0],
    qtd_estoque: [0]
  }) as IProdutoForm

  @ViewChild('tabela') list?: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const maxScroll = this.list?.nativeElement.scrollHeight;
    this.list?.nativeElement.scrollTo({ top: maxScroll, behavior: 'smooth' });
  }

  cadastrarProduto(){
    this.request.postProduto(this.produtoForm.value)
    .subscribe()
    this.getProduto()
  }

  getProduto(){
    this.request.getProduto()
    .pipe(take(1))
    .subscribe(res => this.listaProduto = <IProduto[]>res)
  }
}
