import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojasComponent } from './lojas.component';

describe('Component', () => {
  let component: LojasComponent;
  let fixture: ComponentFixture<LojasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LojasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });