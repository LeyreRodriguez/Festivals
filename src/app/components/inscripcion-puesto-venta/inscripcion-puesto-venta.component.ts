import { festival } from '../../models/festival/festival';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InscripcionPuestoVentaService } from 'src/app/services/inscripcion-puesto-venta.service';

@Component({
  selector: 'app-inscripcion-puesto-venta',
  templateUrl: './inscripcion-puesto-venta.component.html',
  styleUrls: ['./inscripcion-puesto-venta.component.css']
})
export class InscripcionPuestoVentaComponent implements OnInit {
  ventaForm: FormGroup;
  loading = false;
  overlay = false;
  id: string | undefined;
  listFestivales: festival[] = [];

  constructor(
        private fb: FormBuilder,
        private inscripcionPuestoVentaService: InscripcionPuestoVentaService,
        private toastr: ToastrService,
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
    this.obtenerFestivales();
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

    this.loading = true;
    this.inscripcionPuestoVentaService.guardarVenta(puestoVenta).then(() => {
      this.loading = false;
      this.overlay = true;
      console.log('tarjeta registrado');
      this.toastr.success('El usuario fue registrado con exito en el concurso!', 'Concurso registrado')
      this.ventaForm.reset();
    }, error => {
      this.loading = false;
      this.toastr.error('Opps.. ocurrio un error', 'Error');
      console.log(error);
    })
  }

  guardarVenta() {
    if(this.id === undefined) {
      this.agregarVenta();
    }
  }

  obtenerFestivales(){
    this.inscripcionPuestoVentaService.obtenerFestivales().subscribe(doc => {
      this.listFestivales = [];
      doc.forEach((element: any) => {
        this.listFestivales.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.listFestivales);
    })
  }
}
