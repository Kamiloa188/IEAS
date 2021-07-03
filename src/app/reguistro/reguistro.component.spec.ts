import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReguistroComponent } from './reguistro.component';

describe('ReguistroComponent', () => {
  let component: ReguistroComponent;
  let fixture: ComponentFixture<ReguistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReguistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReguistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
