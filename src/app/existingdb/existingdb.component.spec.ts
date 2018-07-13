import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingdbComponent } from './existingdb.component';

describe('ExistingdbComponent', () => {
  let component: ExistingdbComponent;
  let fixture: ComponentFixture<ExistingdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
