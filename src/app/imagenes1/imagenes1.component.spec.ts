import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagenes1Component } from './imagenes1.component';

describe('Imagenes1Component', () => {
  let component: Imagenes1Component;
  let fixture: ComponentFixture<Imagenes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Imagenes1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagenes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
