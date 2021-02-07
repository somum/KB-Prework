import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorenavbarComponent } from './explorenavbar.component';

describe('ExplorenavbarComponent', () => {
  let component: ExplorenavbarComponent;
  let fixture: ComponentFixture<ExplorenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorenavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
