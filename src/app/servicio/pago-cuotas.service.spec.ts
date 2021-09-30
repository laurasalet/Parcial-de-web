import { TestBed } from '@angular/core/testing';

import { PagoCuotasService } from './pago-cuotas.service';

describe('PagoCuotasService', () => {
  let service: PagoCuotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoCuotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
