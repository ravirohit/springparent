import { TestBed } from '@angular/core/testing';

import { SharedInfoContainerService } from './shared-info-container.service';

describe('SharedInfoContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedInfoContainerService = TestBed.get(SharedInfoContainerService);
    expect(service).toBeTruthy();
  });
});
