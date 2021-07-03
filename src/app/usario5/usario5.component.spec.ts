import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usario5Component } from './usario5.component';

describe('Usario5Component', () => {
  let component: Usario5Component;
  let fixture: ComponentFixture<Usario5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usario5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usario5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
