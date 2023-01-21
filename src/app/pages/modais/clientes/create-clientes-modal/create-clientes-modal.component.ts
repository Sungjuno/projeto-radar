import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-clientes-modal',
  templateUrl: './create-clientes-modal.component.html',
  styleUrls: ['./create-clientes-modal.component.css']
})
export class CreateClientesModalComponent {
  constructor(
    private http:HttpClient,
    public activeModal: NgbActiveModal,
  ) { }
}
