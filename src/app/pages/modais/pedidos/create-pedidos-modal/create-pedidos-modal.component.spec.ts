import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePedidosModalComponent } from './create-pedidos-modal.component';

describe('CreatePedidosModalComponent', () => {
  let component: CreatePedidosModalComponent;
  let fixture: ComponentFixture<CreatePedidosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePedidosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePedidosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
