import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInventoryEntryComponent } from './newinventoryentry.component';

describe('NewitementryComponent', () => {
  let component: NewInventoryEntryComponent;
  let fixture: ComponentFixture<NewInventoryEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInventoryEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInventoryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
