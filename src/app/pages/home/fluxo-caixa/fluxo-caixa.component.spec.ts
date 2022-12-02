import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxoCaixaComponent } from './fluxo-caixa.component';

describe('FluxoCaixaComponent', () => {
  let component: FluxoCaixaComponent;
  let fixture: ComponentFixture<FluxoCaixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxoCaixaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluxoCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
