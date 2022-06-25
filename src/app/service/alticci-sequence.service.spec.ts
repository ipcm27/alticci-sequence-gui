import { TestBed } from '@angular/core/testing';

import { AlticciSequenceService } from './alticci-sequence.service';

describe('AlticciServiceService', () => {
  let service: AlticciSequenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlticciSequenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
