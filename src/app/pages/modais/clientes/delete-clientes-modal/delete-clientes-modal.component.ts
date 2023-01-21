import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-clientes-modal',
  templateUrl: './delete-clientes-modal.component.html',
  styleUrls: ['./delete-clientes-modal.component.css']
})
export class DeleteClientesModalComponent {
  constructor(
    private http:HttpClient,
    public activeModal: NgbActiveModal,
  ) { }
}
