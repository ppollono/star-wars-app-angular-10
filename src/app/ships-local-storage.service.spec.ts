import { TestBed } from '@angular/core/testing';

import { ShipsLocalStorageService } from './ships-local-storage.service';

import * as moment from 'moment';

describe('ShipsLocalStorageService', () => {
  let service: ShipsLocalStorageService;

  let validCache: any = {
    "lastRequest": {},
    "cache": [1,2,3],
    "expiresAt": moment().add(5, 'm').toDate()
  }
  let invalidCache: any = {
    "lastRequest": {},
    "cache": [1,2,3],
    "expiresAt": moment().toDate()
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipsLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get cache default when local storage is empty', () => {
    localStorage.cache = null;
    expect(service.getCache()).toBe(service.cache);
  });

  it('should set cache into local storage', () => {
    service.setCache(validCache);
    expect(service.getCache()).toEqual(JSON.parse(localStorage['cache']));
  });

  it('should get cache from local storage', () => {
    service.setCache(validCache);
    expect(service.getCache()).toEqual(JSON.parse(localStorage['cache']));
  });

  it('should validate if cache is expired', () => {
    expect(service.isValidCache(invalidCache)).toBeFalse();
  });

  it('should validate if cache is valid', () => {
    expect(service.isValidCache(validCache)).toBeTrue();
  });
});
