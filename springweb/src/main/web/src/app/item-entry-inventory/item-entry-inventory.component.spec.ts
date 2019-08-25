import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEntryInventoryComponent } from './item-entry-inventory.component';

describe('ItemEntryInventoryComponent', () => {
  let component: ItemEntryInventoryComponent;
  let fixture: ComponentFixture<ItemEntryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEntryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEntryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
