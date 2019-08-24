import { TestBed } from '@angular/core/testing';

import { CommonutilService } from './commonutil.service';

describe('CommonutilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonutilService = TestBed.get(CommonutilService);
    expect(service).toBeTruthy();
  });
});
