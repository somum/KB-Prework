import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincarouselComponent } from './maincarousel.component';

describe('MaincarouselComponent', () => {
  let component: MaincarouselComponent;
  let fixture: ComponentFixture<MaincarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
