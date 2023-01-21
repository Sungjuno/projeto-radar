import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-produtos-modal',
  templateUrl: './delete-produtos-modal.component.html',
  styleUrls: ['./delete-produtos-modal.component.css']
})
export class DeleteProdutosModalComponent {
  constructor(
    private http:HttpClient,
    public activeModal: NgbActiveModal,
  ) { }
}
