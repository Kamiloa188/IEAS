import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usario2Component } from './usario2.component';

describe('Usario2Component', () => {
  let component: Usario2Component;
  let fixture: ComponentFixture<Usario2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usario2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
