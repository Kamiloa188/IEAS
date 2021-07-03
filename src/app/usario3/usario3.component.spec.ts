import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usario3Component } from './usario3.component';

describe('Usario3Component', () => {
  let component: Usario3Component;
  let fixture: ComponentFixture<Usario3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usario3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usario3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
