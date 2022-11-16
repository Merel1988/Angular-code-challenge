import { TestBed } from '@angular/core/testing';

import { LicensePlateCheckService } from './license-plate-check.service';

describe('LicensePlateCheckService', () => {
  let service: LicensePlateCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicensePlateCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
