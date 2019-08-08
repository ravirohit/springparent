import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewitementryComponent } from './newitementry.component';

describe('NewitementryComponent', () => {
  let component: NewitementryComponent;
  let fixture: ComponentFixture<NewitementryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewitementryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewitementryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
