import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypegalleryComponent } from './typegallery.component';

describe('TypegalleryComponent', () => {
  let component: TypegalleryComponent;
  let fixture: ComponentFixture<TypegalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypegalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypegalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
