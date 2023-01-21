import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-produtos-modal',
  templateUrl: './view-produtos-modal.component.html',
  styleUrls: ['./view-produtos-modal.component.css']
})
export class ViewProdutosModalComponent {
  constructor(
    private http:HttpClient,
    public activeModal: NgbActiveModal,
  ) { }
}
