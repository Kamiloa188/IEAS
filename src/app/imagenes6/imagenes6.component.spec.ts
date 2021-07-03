import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagenes6Component } from './imagenes6.component';

describe('Imagenes6Component', () => {
  let component: Imagenes6Component;
  let fixture: ComponentFixture<Imagenes6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Imagenes6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagenes6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
