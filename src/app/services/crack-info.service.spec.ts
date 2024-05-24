import { TestBed } from '@angular/core/testing';

import { CrackInfoService } from './crack-info.service';

describe('CrackInfoService', () => {
  let service: CrackInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrackInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
