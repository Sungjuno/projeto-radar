import { AuthService } from './../../shared/auth/auth.service';
import { ILoja, ILojaForm } from 'src/app/shared/models/loja.interface';
import { LojasRequestService } from 'src/app/shared/request/lojas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { take } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewLojasModalComponent } from '../modais/lojas/view-lojas-modal/view-lojas-modal.component';
import { CreateLojasModalComponent } from '../modais/lojas/create-lojas-modal/create-lojas-modal.component';
import { EditLojasModalComponent } from '../modais/lojas/edit-lojas-modal/edit-lojas-modal.component';
import { DeleteLojasModalComponent } from '../modais/lojas/delete-lojas-modal/delete-lojas-modal.component';
import { EnderecoRequestService } from 'src/app/shared/request/endereco.service';
import { ILojaPost } from 'src/app/shared/models/lojaPost.interface';
import { IEndereco } from 'src/app/shared/models/endereco.interface';


@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.css']
})

export class LojasComponent implements OnInit {
 
  constructor(
    private fb: FormBuilder,
    private request: LojasRequestService,
    private endRequest:EnderecoRequestService,
    private modalService: NgbModal,
    public auth: AuthService) {

  }

  ngOnInit(): void {
    this.getLojas()
  }
  
  termoBuscar: string = "";
  public lojas:ILoja[] = []

   getLojas() {
    this.request.getLoja().pipe(take(1)).subscribe(res=>{
      this.endRequest.getEndereco().pipe(take(1)).subscribe(response=>{
        let lojasPost = <ILojaPost[]>res;
        let hashFindEnd = new Map<number,number>();
        let enderecos = <IEndereco[]>response;
        for (let i = 0; i < enderecos.length; i++) {
          const endereco = enderecos[i].id;
          hashFindEnd.set(endereco,i);
        }
        lojasPost.forEach(loja=>{
          this.lojas.push({...enderecos[hashFindEnd.get(loja.enderecoId||0)||0],...loja})
        })
      })
    })
    
  }

  ViewLoja(loja: ILoja){
    let lojaForm = this.fb.group({
      id: [loja.id],
      nome: [loja.nome],
      cep: [loja.cep],
      logradouro: [loja.logradouro],
      numero: [loja.numero],
      bairro: [loja.bairro],
      cidade: [loja.cidade],
      estado: [loja.estado],
      complemento: [loja.complemento],
    }) as ILojaForm
    const modalRef = this.modalService.open(ViewLojasModalComponent);
    modalRef.componentInstance.lojaForm = lojaForm;
  }

  CreateLoja(){
    this.modalService.open(CreateLojasModalComponent);
  }

  EditLoja(loja: ILoja){
    let lojaForm = this.fb.group({
      id: [loja.id],
      nome: [loja.nome],
      cep: [loja.cep],
      logradouro: [loja.logradouro],
      numero: [loja.numero],
      bairro: [loja.bairro],
      cidade: [loja.cidade],
      estado: [loja.estado],
      complemento: [loja.complemento],
    }) as ILojaForm
    const modalRef = this.modalService.open(EditLojasModalComponent);
    modalRef.componentInstance.lojaForm = lojaForm;
    modalRef.componentInstance.enderecoId = loja.enderecoId;
  }
  
  DeleteLoja(loja: ILoja){
    const modalRef = this.modalService.open(DeleteLojasModalComponent);
    modalRef.componentInstance.loja = loja;
  }
}


