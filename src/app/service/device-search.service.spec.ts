import { TestBed } from '@angular/core/testing';

import { DeviceSearchService } from './device-search.service';

describe('DeviceSearchService', () => {
  let service: DeviceSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
