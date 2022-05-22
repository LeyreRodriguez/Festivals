
import { festival } from 'src/app/models/festival/festival';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscripcionPuestoVentaService } from 'src/app/services/inscripcion-puesto-venta.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FestivalService } from 'src/app/services/festival-service.service';

@Component({
  selector: 'app-inscripcion-puesto-venta',
  templateUrl: './inscripcion-puesto-venta.component.html',
  styleUrls: ['./inscripcion-puesto-venta.component.scss']
})
export class InscripcionPuestoVentaComponent implements OnInit {
  ventaForm: FormGroup;
  loading = false;
  overlay = false;
  id: string | undefined;
  idFestival_: string | undefined;
  objFestival: Array<festival> = new Array();

  constructor(
        private fb: FormBuilder,
        private inscripcionPuestoVentaService: InscripcionPuestoVentaService,
        private festivalService: FestivalService,
        private rutaActiva: ActivatedRoute,
      ) {
    this.ventaForm = this.fb.group({
      inputContestName: ['', Validators.required],
      inputName: ['', Validators.required],
      inputLastName: ['', Validators.required],
      inputDNI: ['', Validators.required, Validators.pattern(/[0-9]{7,8}[A-Z]/)],
      inputContactNumber: ['', [Validators.required, Validators.pattern(/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/)]],
      inputEmail: ['', [Validators.required, Validators.pattern(/[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/)]],
      inputBusinessName: ['', Validators.required],
      inputDescription: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.obtenerFestival();
    this.obtenerId();
  }

  obtenerId(){
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.idFestival_ = params['id'];
      }
    );
    console.log('Id = ' + this.idFestival_);
  }

  agregarVenta() {

    const puestoVenta: any = {
      inputContestName: this.ventaForm.value.inputContestName,
      inputName: this.ventaForm.value.inputName,
      inputLastName: this.ventaForm.value.inputLastName,
      inputDNI: this.ventaForm.value.inputDNI,
      inputContactNumber: this.ventaForm.value.inputContactNumber,
      inputEmail: this.ventaForm.value.inputEmail,
      inputBusinessName: this.ventaForm.value.inputBusinessName,
      inputDescription: this.ventaForm.value.inputDescription,
    }

    console.log('Holaaaaaaa');
    puestoVenta.idFestival = this.idFestival_;
    console.log('Adiossssss');

    this.loading = true;
    this.inscripcionPuestoVentaService.guardarVenta(puestoVenta).then(() => {
      this.loading = false;
      console.log('tarjeta registrado');
      this.ventaForm.reset();
    }, error => {
      this.loading = false;
      this.overlay = true;
      console.log(error);
    })
  }

  guardarVenta() {
    if(this.id === undefined) {
      this.agregarVenta();
    }
  }

  obtenerFestival(){
    this.festivalService.obtenerFestival().subscribe(doc => {
      doc.forEach((element: any) => {
        if(this.idFestival_ == element.payload.doc.data().id){
          this.objFestival.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        }
      });
    })
  }
}
