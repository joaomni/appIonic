import { TestBed } from '@angular/core/testing';

import { PesoMulherService } from './peso-mulher.service';

describe('PesoMulherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PesoMulherService = TestBed.get(PesoMulherService);
    expect(service).toBeTruthy();
  });
});
