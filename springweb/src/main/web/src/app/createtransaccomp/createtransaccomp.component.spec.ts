import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatetransaccompComponent } from './createtransaccomp.component';

describe('CreatetransaccompComponent', () => {
  let component: CreatetransaccompComponent;
  let fixture: ComponentFixture<CreatetransaccompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetransaccompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetransaccompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
