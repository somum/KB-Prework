import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWiseDetailsComponent } from './category-wise-details.component';

describe('CategoryWiseDetailsComponent', () => {
  let component: CategoryWiseDetailsComponent;
  let fixture: ComponentFixture<CategoryWiseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryWiseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
