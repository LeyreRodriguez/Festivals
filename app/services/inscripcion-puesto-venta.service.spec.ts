import { TestBed } from '@angular/core/testing';

import { InscripcionPuestoVentaService } from './inscripcion-puesto-venta.service';

describe('InscripcionPuestoVentaService', () => {
  let service: InscripcionPuestoVentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscripcionPuestoVentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
