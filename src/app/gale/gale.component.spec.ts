import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleComponent } from './gale.component';

describe('GaleComponent', () => {
  let component: GaleComponent;
  let fixture: ComponentFixture<GaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
