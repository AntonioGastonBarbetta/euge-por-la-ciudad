import { TestBed, inject } from '@angular/core/testing';

import { MuralsService } from './murals.service';

describe('MuralsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MuralsService]
    });
  });

  it('should be created', inject([MuralsService], (service: MuralsService) => {
    expect(service).toBeTruthy();
  }));
});
