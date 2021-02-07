import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenavigationComponent } from './pagenavigation.component';

describe('PagenavigationComponent', () => {
  let component: PagenavigationComponent;
  let fixture: ComponentFixture<PagenavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
