import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionPuestoVentaComponent } from './inscripcion-puesto-venta.component';

describe('InscripcionPuestoVentaComponent', () => {
  let component: InscripcionPuestoVentaComponent;
  let fixture: ComponentFixture<InscripcionPuestoVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionPuestoVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionPuestoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
