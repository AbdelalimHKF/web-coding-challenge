import { TestBed, inject } from '@angular/core/testing';

import { FctService } from './fct.service';

describe('FctService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FctService]
    });
  });

  it('should be created', inject([FctService], (service: FctService) => {
    expect(service).toBeTruthy();
  }));
});
