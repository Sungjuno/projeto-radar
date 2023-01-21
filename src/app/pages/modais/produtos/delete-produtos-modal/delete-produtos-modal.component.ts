import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { IProduto } from 'src/app/shared/models/produto.interface';
import { RequestService } from 'src/app/shared/request/request.service';

@Component({
  selector: 'app-delete-produtos-modal',
  templateUrl: './delete-produtos-modal.component.html',
  styleUrls: ['./delete-produtos-modal.component.css']
})
export class DeleteProdutosModalComponent {
  @Input() produto!:IProduto;
  constructor(
    private request: RequestService,
    public activeModal: NgbActiveModal,
  ) { 
    console.log(this.produto)}
  delete ():void{
    this.request.deleteProduto(this.produto.id)
      .pipe(take(1))
      .subscribe()
    this.activeModal.dismiss();
    window.location.replace("/produtos");
  }
}
