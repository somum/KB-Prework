import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntemscarouselComponent } from './intemscarousel.component';

describe('IntemscarouselComponent', () => {
  let component: IntemscarouselComponent;
  let fixture: ComponentFixture<IntemscarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntemscarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntemscarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
