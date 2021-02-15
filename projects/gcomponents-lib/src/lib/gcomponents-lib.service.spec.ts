import { TestBed } from '@angular/core/testing';

import { GComponentsLibService } from './gcomponents-lib.service';

describe('GComponentsLibService', () => {
  let service: GComponentsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GComponentsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
