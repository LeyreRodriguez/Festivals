import { TestBed } from '@angular/core/testing';

import { InficiteScrollService } from './inficite-scroll.service';

describe('InficiteScrollService', () => {
  let service: InficiteScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InficiteScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
