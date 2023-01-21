import { AuthService } from './../../shared/auth/auth.service';
import { IProduto } from 'src/app/shared/models/produto.interface';
import { IProdutoForm } from '../../shared/models/produto.interface';
import { RequestService } from 'src/app/shared/request/request.service';
import { FormBuilder } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateProdutosModalComponent } from '../modais/produtos/create-produtos-modal/create-produtos-modal.component';
import { EditProdutosModalComponent } from '../modais/produtos/edit-produtos-modal/edit-produtos-modal.component';
import { DeleteProdutosModalComponent } from '../modais/produtos/delete-produtos-modal/delete-produtos-modal.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ViewProdutosModalComponent } from '../modais/produtos/view-produtos-modal/view-produtos-modal.component';

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal?.addEventListener('shown.bs.modal', () => {
  myInput?.focus()
})

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})


export class ProdutosComponent implements OnInit {


  constructor(
    // private fb: FormBuilder,
    private request: RequestService,
    public auth: AuthService,
    private modalService: NgbModal,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getProduto()
  }

  public produtos:IProduto[] = []

  getProduto() {
    this.request.getProduto()
      .pipe(take(1))
      .subscribe(list => {
        this.produtos = <IProduto[]>list;
      })
    console.log(this.produtos);
  }

  ViewProduto(produto: IProduto){
    let produtoForm = this.fb.group({
      id: [produto.id],
      nome: [produto.nome],
      descricao: [produto.descricao],
      valor: [produto.valor],
      qtdestoque: [produto.qtdestoque]
    }) as IProdutoForm
    const modalRef = this.modalService.open(ViewProdutosModalComponent);
    modalRef.componentInstance.produtoForm = produtoForm;
  }

  CreateProduto(){
    const modalRef = this.modalService.open(CreateProdutosModalComponent);
  }

  
  EditProduto(produto: IProduto){
    let produtoForm = this.fb.group({
      id: [produto.id],
      nome: [produto.nome],
      descricao: [produto.descricao],
      valor: [produto.valor],
      qtdestoque: [produto.qtdestoque]
    }) as IProdutoForm
    const modalRef = this.modalService.open(EditProdutosModalComponent);
    modalRef.componentInstance.produtoForm = produtoForm;
  }
  
  DeleteProduto(produto: IProduto){
    const modalRef = this.modalService.open(DeleteProdutosModalComponent);
    modalRef.componentInstance.produto = produto;
  }

 /*  id = -1;
  validador = true;*/
  

  /*produtoForm = this.fb.group({
    id: [0],
    nome: [''],
    descricao: [''],
    valor: [0],
    qtdestoque: [0]
  }) as IProdutoForm

  @ViewChild('tabela') list?: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const maxScroll = this.list?.nativeElement.scrollHeight;
    this.list?.nativeElement.scrollTo({ top: maxScroll, behavior: 'smooth' });
  }

  cadastrarProduto() {
    this.request.postProduto(this.produtoForm.value)
      .subscribe()
    this.getProduto()
    this.resetForm()
  }

  editarProduto() {
    this.request.updateProduto(this.produtoForm.value)
      .pipe(take(1))
      .subscribe()
    this.id = -1;
    this.getProduto()
    this.resetForm()
  }*/

 /*  getProduto() {
    this.request.getProduto()
      .pipe(take(1))
      .subscribe(res => this.listaProduto = <IProduto[]>res)
    this.listaProduto = [{
      id: 0,
      nome: 'teste',
      descricao: 'teste',
      valor: 0,
      qtdestoque: 0
    }];
  } */

  /*removeProduto(event: any) {
    this.request.deleteProduto(event)
      .pipe(take(1))
      .subscribe()
    this.getProduto()
  }

  pushProduto(event: any) {
    let produto = this.listaProduto[event];
    this.id = produto.id;
    this.produtoForm = this.fb.group({
      id: [produto.id],
      nome: [produto.nome],
      descricao: [produto.descricao],
      valor: [produto.valor],
      qtdestoque: [produto.qtdestoque]
    }) as IProdutoForm
  }

  resetForm() {
    this.produtoForm.reset();
  }
 */
 

  
}
