import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usario4Component } from './usario4.component';

describe('Usario4Component', () => {
  let component: Usario4Component;
  let fixture: ComponentFixture<Usario4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usario4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usario4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
