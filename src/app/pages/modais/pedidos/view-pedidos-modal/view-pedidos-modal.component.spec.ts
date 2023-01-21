import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPedidosModalComponent } from './view-pedidos-modal.component';

describe('ViewPedidosModalComponent', () => {
  let component: ViewPedidosModalComponent;
  let fixture: ComponentFixture<ViewPedidosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPedidosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPedidosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
