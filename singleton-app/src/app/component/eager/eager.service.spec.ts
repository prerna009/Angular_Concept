import { TestBed } from '@angular/core/testing';

import { EagerService } from './eager.service';

describe('EagerService', () => {
  let service: EagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
