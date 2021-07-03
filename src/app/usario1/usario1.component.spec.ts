import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usario1Component } from './usario1.component';

describe('Usario1Component', () => {
  let component: Usario1Component;
  let fixture: ComponentFixture<Usario1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usario1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usario1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
