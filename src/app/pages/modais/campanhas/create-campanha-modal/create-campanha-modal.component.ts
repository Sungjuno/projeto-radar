import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-campanha-modal',
  templateUrl: './create-campanha-modal.component.html',
  styleUrls: ['./create-campanha-modal.component.css']
})
export class CreateCampanhaModalComponent {
  constructor(
    public activeModal: NgbActiveModal
  ) { }
}
