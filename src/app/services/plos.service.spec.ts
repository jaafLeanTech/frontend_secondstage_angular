import { TestBed } from '@angular/core/testing';

import { PlosService } from './plos.service';

describe('PlosService', () => {
  let service: PlosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
