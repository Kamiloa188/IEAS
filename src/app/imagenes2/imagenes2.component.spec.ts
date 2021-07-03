import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagenes2Component } from './imagenes2.component';

describe('Imagenes2Component', () => {
  let component: Imagenes2Component;
  let fixture: ComponentFixture<Imagenes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Imagenes2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagenes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
