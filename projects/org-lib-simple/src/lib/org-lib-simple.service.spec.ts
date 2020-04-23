import { TestBed } from '@angular/core/testing';

import { OrgLibSimpleService } from './org-lib-simple.service';

describe('OrgLibSimpleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrgLibSimpleService = TestBed.get(OrgLibSimpleService);
    expect(service).toBeTruthy();
  });
});
