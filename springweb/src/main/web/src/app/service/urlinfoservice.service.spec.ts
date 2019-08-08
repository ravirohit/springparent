import { TestBed } from '@angular/core/testing';

import { UrlinfoserviceService } from './urlinfoservice.service';

describe('UrlinfoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlinfoserviceService = TestBed.get(UrlinfoserviceService);
    expect(service).toBeTruthy();
  });
});
