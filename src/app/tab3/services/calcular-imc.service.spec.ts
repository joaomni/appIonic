import { TestBed } from '@angular/core/testing';

import { CalcularIMCService } from './calcular-imc.service';

describe('CalcularIMCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalcularIMCService = TestBed.get(CalcularIMCService);
    expect(service).toBeTruthy();
  });
});
