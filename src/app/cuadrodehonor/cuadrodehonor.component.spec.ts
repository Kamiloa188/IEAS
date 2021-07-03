import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrodehonorComponent } from './cuadrodehonor.component';

describe('CuadrodehonorComponent', () => {
  let component: CuadrodehonorComponent;
  let fixture: ComponentFixture<CuadrodehonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadrodehonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrodehonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
