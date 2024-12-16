import { TestBed } from '@angular/core/testing';

import { ModuleAuthService } from './module-auth.service';

describe('ModuleAuthService', () => {
  let service: ModuleAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
