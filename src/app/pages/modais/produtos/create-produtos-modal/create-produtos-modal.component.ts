import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IProdutoForm } from 'src/app/shared/models/produto.interface';
import { RequestService } from 'src/app/shared/request/request.service';

@Component({
  selector: 'app-create-produtos-modal',
  templateUrl: './create-produtos-modal.component.html',
  styleUrls: ['./create-produtos-modal.component.css']
})
export class CreateProdutosModalComponent {
  constructor(
    private fb: FormBuilder,
    private http:HttpClient,
    public activeModal: NgbActiveModal,
    public request:RequestService
  ) { }
  produtoForm = this.fb.group({
    id: [0],
    nome: [''],
    descricao: [''],
    valor: [0],
    qtdestoque: [0]
  }) as IProdutoForm;
  create(){
    this.request.postProduto(this.produtoForm.value)
      .subscribe();
  }
}
