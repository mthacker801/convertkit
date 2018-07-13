import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdbComponent } from './newdb.component';

describe('NewdbComponent', () => {
  let component: NewdbComponent;
  let fixture: ComponentFixture<NewdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
