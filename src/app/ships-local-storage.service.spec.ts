import { TestBed } from '@angular/core/testing';

import { ShipsLocalStorageService } from './ships-local-storage.service';

describe('ShipsLocalStorageService', () => {
  let service: ShipsLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipsLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
