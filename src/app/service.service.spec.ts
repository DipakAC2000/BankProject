import { TestBed } from '@angular/core/testing';

import { appServiceService } from './service.service';

describe('appServiceService', () => {
  let service: appServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(appServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
