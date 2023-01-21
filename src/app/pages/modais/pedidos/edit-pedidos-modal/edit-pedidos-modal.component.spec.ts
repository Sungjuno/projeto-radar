import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPedidosModalComponent } from './edit-pedidos-modal.component';

describe('EditPedidosModalComponent', () => {
  let component: EditPedidosModalComponent;
  let fixture: ComponentFixture<EditPedidosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPedidosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPedidosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
