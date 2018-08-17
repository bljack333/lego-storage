import { TestBed, inject } from '@angular/core/testing';

import { SetsService } from './sets.service';

describe('SetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetsService]
    });
  });

  it('should be created', inject([SetsService], (service: SetsService) => {
    expect(service).toBeTruthy();
  }));
});
