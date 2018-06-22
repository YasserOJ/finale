import { TestBed, inject } from '@angular/core/testing';

import { ValidationServService } from './validation-serv.service';

describe('ValidationServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationServService]
    });
  });

  it('should be created', inject([ValidationServService], (service: ValidationServService) => {
    expect(service).toBeTruthy();
  }));
});
