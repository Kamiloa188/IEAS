import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagenes4Component } from './imagenes4.component';

describe('Imagenes4Component', () => {
  let component: Imagenes4Component;
  let fixture: ComponentFixture<Imagenes4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Imagenes4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagenes4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
