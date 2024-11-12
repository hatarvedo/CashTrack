import { TestBed } from '@angular/core/testing';

import { _AdatokService } from './adatok.service';

describe('AdatokService', () => {
  let service: _AdatokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(_AdatokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
