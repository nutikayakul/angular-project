import { TestBed } from '@angular/core/testing';

import { CrodService } from './crod.service';

describe('CrodService', () => {
  let service: CrodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
