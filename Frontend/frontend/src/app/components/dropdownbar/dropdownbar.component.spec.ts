import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownbarComponent } from './dropdownbar.component';

describe('DropdownbarComponent', () => {
  let component: DropdownbarComponent;
  let fixture: ComponentFixture<DropdownbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
