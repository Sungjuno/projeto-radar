import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { ICliente } from 'src/app/shared/models/cliente.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-clientes-modal',
  templateUrl: './create-clientes-modal.component.html',
  styleUrls: ['./create-clientes-modal.component.css']
})
export class CreateClientesModalComponent {

  cadastros = 0

  constructor(
    private http:HttpClient,
    public activeModal: NgbActiveModal,
  ) { }
}
