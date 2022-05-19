import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormularioCompraEntradasComponent } from './formulario-compra-entradas.component';

describe('FormularioCompraEntradasComponent', () => {
  let component: FormularioCompraEntradasComponent;
  let fixture: ComponentFixture<FormularioCompraEntradasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCompraEntradasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioCompraEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
