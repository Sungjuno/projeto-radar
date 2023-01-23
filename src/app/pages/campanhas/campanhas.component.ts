import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { ICampanha, ICampanhaForm } from 'src/app/shared/models/campanha.interface';
import { CampanhaRequestService } from 'src/app/shared/request/campanhas.service';

@Component({
  selector: 'app-campanhas',
  templateUrl: './campanhas.component.html',
  styleUrls: ['./campanhas.component.css']
})
export class CampanhasComponent {

  constructor(
    private fb: FormBuilder,
    private request: CampanhaRequestService,
    private modalService: NgbModal,
    public auth: AuthService) {

  }

  ngOnInit(): void {
    this.getCampanhas()
  }
  
  public campanhas:ICampanha[] = []

  getCampanhas() {
    this.request.getCampanha()
      .pipe(take(1))
      .subscribe(list => {
        this.campanhas = <ICampanha[]>list;
      });
  }

  ViewCampanha(campanha: ICampanha){
/*     let CampanhaForm = this.fb.group({
      id: [campanha.id],
      nome: [campanha.nome],
      telefone: [campanha.telefone],
      email: [campanha.email],
      cpf: [campanha.cpf],
      cep: [campanha.cep],
      logradouro: [campanha.logradouro],
      numero: [campanha.numero],
      bairro: [campanha.bairro],
      cidade: [campanha.cidade],
      estado: [campanha.estado],
      complemento: [campanha.complemento],
    }) as ICampanhaForm
    const modalRef = this.modalService.open(ViewCampanhasModalComponent);
    modalRef.componentInstance.campanhaForm = CampanhaForm; */
  }

  CreateCampanha(){
    /* this.modalService.open(CreateCampanhasModalComponent); */
  }

  EditCampanha(campanha: ICampanha){
 /*    let CampanhaForm = this.fb.group({
      id: [campanha.id],
      nome: [campanha.nome],
      telefone: [campanha.telefone],
      email: [campanha.email],
      cpf: [campanha.cpf],
      cep: [campanha.cep],
      logradouro: [campanha.logradouro],
      numero: [campanha.numero],
      bairro: [campanha.bairro],
      cidade: [campanha.cidade],
      estado: [campanha.estado],
      complemento: [campanha.complemento],
    }) as ICampanhaForm
    const modalRef = this.modalService.open(EditCampanhasModalComponent);
    modalRef.componentInstance.campanhaForm = CampanhaForm; */
  }
  
  DeleteCampanha(campanha: ICampanha){
/*     const modalRef = this.modalService.open(DeleteCampanhasModalComponent);
    modalRef.componentInstance.campanha = campanha; */
  }

  Modelos () {
    
  }
}
