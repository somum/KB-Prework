import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterWarrantyComponent } from './filter-warranty.component';

describe('FilterWarrantyComponent', () => {
  let component: FilterWarrantyComponent;
  let fixture: ComponentFixture<FilterWarrantyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterWarrantyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterWarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
