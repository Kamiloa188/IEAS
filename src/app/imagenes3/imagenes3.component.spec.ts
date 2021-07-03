import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagenes3Component } from './imagenes3.component';

describe('Imagenes3Component', () => {
  let component: Imagenes3Component;
  let fixture: ComponentFixture<Imagenes3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Imagenes3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagenes3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
