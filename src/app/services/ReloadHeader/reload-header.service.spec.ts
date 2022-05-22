import { TestBed } from '@angular/core/testing';

import { ReloadHeaderService } from './reload-header.service';

describe('ReloadHeaderService', () => {
  let service: ReloadHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
