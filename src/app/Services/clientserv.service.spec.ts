import { TestBed, inject } from '@angular/core/testing';

import { ClientservService } from './clientserv.service';

describe('ClientservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientservService]
    });
  });

  it('should be created', inject([ClientservService], (service: ClientservService) => {
    expect(service).toBeTruthy();
  }));
});
