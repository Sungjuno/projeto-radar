import { AuthService } from './../../shared/auth/auth.service';
import { LojasRequestService } from 'src/app/shared/request/lojas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { take } from 'rxjs';
import { ILoja } from 'src/app/shared/models/loja.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewLojasModalComponent } from '../modais/lojas/view-lojas-modal/view-lojas-modal.component';
import { CreateLojasModalComponent } from '../modais/lojas/create-lojas-modal/create-lojas-modal.component';
import { EditLojasModalComponent } from '../modais/lojas/edit-lojas-modal/edit-lojas-modal.component';
import { DeleteLojasModalComponent } from '../modais/lojas/delete-lojas-modal/delete-lojas-modal.component';

@Component({
    selector: 'app-lojas',
    templateUrl: './lojas.component.html',
    styleUrls: ['./lojas.component.css'] })

    export class LojasComponent implements OnInit{

    
        
  lojas: ILoja[] = []

  constructor(
    // private fb:FormBuilder,
    private request: LojasRequestService,
    public auth: AuthService,
    private modalService: NgbModal,
    ) { }

    // Função getClientes, que pega todos os clientes e carrega na variável clientes, declarada  no início da classe
    getLojas(){
      this.request.getLoja()
      .pipe(take(1))
      .subscribe( res => this.lojas = <ILoja[]>res)
    }
    ngOnInit(): void {
      this.getLojas()
    }
    ViewLoja(loja: ILoja){
      const modalRef = this.modalService.open(ViewLojasModalComponent);
      modalRef.componentInstance.loja = loja;
    }

    CreateLoja(){
      this.modalService.open(CreateLojasModalComponent);
    }


    EditLoja(loja: ILoja){
      const modalRef = this.modalService.open(EditLojasModalComponent);
      modalRef.componentInstance.loja = loja;
    }

    DeleteLoja(loja: ILoja){
      const modalRef = this.modalService.open(DeleteLojasModalComponent);
      modalRef.componentInstance.loja = loja;
    }

    }

      

