import { TestBed, inject } from '@angular/core/testing';

import { PropositionsService } from './propositions.service';

describe('PropositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropositionsService]
    });
  });

  it('should be created', inject([PropositionsService], (service: PropositionsService) => {
    expect(service).toBeTruthy();
  }));
});
