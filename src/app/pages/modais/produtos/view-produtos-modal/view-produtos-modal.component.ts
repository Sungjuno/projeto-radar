import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IProduto } from 'src/app/shared/models/produto.interface';

@Component({
  selector: 'app-view-produtos-modal',
  templateUrl: './view-produtos-modal.component.html',
  styleUrls: ['./view-produtos-modal.component.css']
})
export class ViewProdutosModalComponent {
  @Input() produto!:IProduto;
  
  constructor(
    public activeModal: NgbActiveModal,
  ) {   }
  
}
