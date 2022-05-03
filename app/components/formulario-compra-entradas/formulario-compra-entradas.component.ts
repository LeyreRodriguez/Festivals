import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EntradasService } from 'src/app/services/entradas.service';

@Component({
  selector: 'app-formulario-compra-entradas',
  templateUrl: './formulario-compra-entradas.component.html',
})
export class FormularioCompraEntradasComponent implements OnInit {
  entradasForm: FormGroup;
  loading = false;
  submitted = false;
  id: string | undefined;
  titulo = 'Compra entrada';;

  constructor(
        private fb: FormBuilder,
        private entradasService: EntradasService,
        private toastr: ToastrService,) {
    this.entradasForm = this.fb.group({
      inputNombre: ['', Validators.required],
      inputApellidos: ['', Validators.required],
      inputDni: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(9), Validators.pattern("[0-9]{8}[A-Za-z]{1}")]],
      inputsNcontacto: ['', Validators.required],
      inputCorreo: ['', [Validators.required, Validators.pattern("^[^@]+@[^@]+\.[a-zA-Z]{2,}$")]],
      inputDomicilio: ['', Validators.required],
      inputNtarjeta: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarEntrada() {
    const entrada: any = {
      inputNombre: this.entradasForm.value.inputNombre,
      inputApellidos: this.entradasForm.value.inputApellidos,
      inputDni: this.entradasForm.value.inputDni,
      inputsNcontacto: this.entradasForm.value.inputsNcontacto,
      inputCorreo: this.entradasForm.value.inputCorreo,
      inputDomicilio: this.entradasForm.value.inputDomicilio,
      inputNtarjeta: this.entradasForm.value.inputNtarjeta,
    }

    this.loading = true;
    this.entradasService.guardarEntrada(entrada).then(() => {
      this.loading = false;
      console.log('tarjeta registrado');
      this.toastr.success('Compra con exito!', 'Compra registrada')
      this.entradasForm.reset();
    }, error => {
      this.loading = false;
      this.toastr.error('Opps.. ocurrio un error', 'Error');
      console.log(error);
    })
  }

  guardarEntrada() {
    if(this.id === undefined) {
      this.agregarEntrada();
    }
  }
}
