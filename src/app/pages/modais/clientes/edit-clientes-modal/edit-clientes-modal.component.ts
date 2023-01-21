import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-clientes-modal',
  templateUrl: './edit-clientes-modal.component.html',
  styleUrls: ['./edit-clientes-modal.component.css']
})
export class EditClientesModalComponent {
  constructor(
    private http:HttpClient,
    public activeModal: NgbActiveModal,
  ) { }
}
