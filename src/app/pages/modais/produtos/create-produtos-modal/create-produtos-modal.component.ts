import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-produtos-modal',
  templateUrl: './create-produtos-modal.component.html',
  styleUrls: ['./create-produtos-modal.component.css']
})
export class CreateProdutosModalComponent {
  constructor(
    private http:HttpClient,
    public activeModal: NgbActiveModal,
  ) { }
}
