import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usario6Component } from './usario6.component';

describe('Usario6Component', () => {
  let component: Usario6Component;
  let fixture: ComponentFixture<Usario6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usario6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usario6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
