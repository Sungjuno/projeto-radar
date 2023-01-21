import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-produtos-modal',
  templateUrl: './edit-produtos-modal.component.html',
  styleUrls: ['./edit-produtos-modal.component.css']
})
export class EditProdutosModalComponent {
  constructor(
    private http:HttpClient,
    public activeModal: NgbActiveModal,
  ) { }
}
