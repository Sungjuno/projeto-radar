import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-clientes-modal',
  templateUrl: './view-clientes-modal.component.html',
  styleUrls: ['./view-clientes-modal.component.css']
})
export class ViewClientesModalComponent {
  constructor(
    private http:HttpClient,
    public activeModal: NgbActiveModal,
  ) { }
}
