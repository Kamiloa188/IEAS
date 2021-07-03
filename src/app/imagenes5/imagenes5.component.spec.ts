import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagenes5Component } from './imagenes5.component';

describe('Imagenes5Component', () => {
  let component: Imagenes5Component;
  let fixture: ComponentFixture<Imagenes5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Imagenes5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagenes5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
