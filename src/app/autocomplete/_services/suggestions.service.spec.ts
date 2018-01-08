import { TestBed, inject } from '@angular/core/testing';

import { SuggestionsService } from './suggestions.service';

describe('SuggestionsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuggestionsService]
    });
  });

  it('should be created', inject([SuggestionsService], (service: SuggestionsService) => {
    expect(service).toBeTruthy();
  }));
});
