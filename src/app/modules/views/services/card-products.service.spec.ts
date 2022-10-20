import { TestBed } from '@angular/core/testing';

import { CardProductsService } from './card-products.service';

describe('CardProductsService', () => {
  let service: CardProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
