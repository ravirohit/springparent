import { TestBed } from '@angular/core/testing';

import { CommonDataContainerService } from './common-data-container.service';

describe('CommonDataContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonDataContainerService = TestBed.get(CommonDataContainerService);
    expect(service).toBeTruthy();
  });
});
