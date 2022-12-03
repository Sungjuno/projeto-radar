import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxoClientesComponent } from './fluxo-clientes.component';

describe('FluxoClientesComponent', () => {
  let component: FluxoClientesComponent;
  let fixture: ComponentFixture<FluxoClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxoClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluxoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
