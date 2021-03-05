import { TestBed } from '@angular/core/testing';

import { ProductAdvanceSearchService } from './product-advance-search.service';

describe('ProductAdvanceSearchService', () => {
  let service: ProductAdvanceSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAdvanceSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
