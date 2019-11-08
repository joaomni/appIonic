import { TestBed } from '@angular/core/testing';

import { PesoHomemService } from './peso-homem.service';

describe('PesoHomemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PesoHomemService = TestBed.get(PesoHomemService);
    expect(service).toBeTruthy();
  });
});
