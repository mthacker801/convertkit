import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixproComponent } from './fixpro.component';

describe('FixproComponent', () => {
  let component: FixproComponent;
  let fixture: ComponentFixture<FixproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
