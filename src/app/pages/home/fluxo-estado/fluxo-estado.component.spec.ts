import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxoEstadoComponent } from './fluxo-estado.component';

describe('FluxoEstadoComponent', () => {
  let component: FluxoEstadoComponent;
  let fixture: ComponentFixture<FluxoEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxoEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluxoEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
