import { TestBed } from '@angular/core/testing';

import { GcWebComponentsService } from './gc-web-components.service';

describe('GcWebComponentsService', () => {
  let service: GcWebComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GcWebComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
