import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvreportComponent } from './csvreport.component';

describe('CsvreportComponent', () => {
  let component: CsvreportComponent;
  let fixture: ComponentFixture<CsvreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
