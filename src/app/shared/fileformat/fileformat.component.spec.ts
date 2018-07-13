import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileformatComponent } from './fileformat.component';

describe('FileformatComponent', () => {
  let component: FileformatComponent;
  let fixture: ComponentFixture<FileformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
