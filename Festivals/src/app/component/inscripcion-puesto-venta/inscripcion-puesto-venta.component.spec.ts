import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscripcionPuestoVentaComponent } from './inscripcion-puesto-venta.component';

describe('InscripcionPuestoVentaComponent', () => {
  let component: InscripcionPuestoVentaComponent;
  let fixture: ComponentFixture<InscripcionPuestoVentaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionPuestoVentaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscripcionPuestoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
