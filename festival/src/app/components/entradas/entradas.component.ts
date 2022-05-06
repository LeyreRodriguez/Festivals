import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EntradasService } from 'src/app/services/entradas.service';

@Component({
  selector: 'app-formulario-compra-entradas',
  templateUrl: './formulario-compra-entradas.component.html',
  styleUrls: ['./formulario-compra-entradas.component.css']
})
export class FormularioCompraEntradasComponent implements OnInit {
  entradasForm: FormGroup;
  loading = false;
  overlay = false;
  submitted = false;
  id: string | undefined;
  titulo = 'Compra entrada';;

  constructor(
        private fb: FormBuilder,
        private entradasService: EntradasService,
        private toastr: ToastrService,) {
    this.entradasForm = this.fb.group({
      inputName: ['', Validators.required],
      inputLastName: ['', Validators.required],
      inputDNI: ['', Validators.required, Validators.pattern(/[0-9]{7,8}[A-Z]/)],
      inputContactNumber: ['', [Validators.required, Validators.pattern(/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/)]],
      inputEmail: ['', [Validators.required, Validators.pattern(/[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/)]],
      inputAddress: ['', Validators.required],
      inputCreditCard: ['', [Validators.required, Validators.pattern(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$/)]]
    })
  }

  ngOnInit(): void {
  }

  agregarEntrada() {
    const entrada: any = {
      inputName: this.entradasForm.value.inputName,
      inputLastName: this.entradasForm.value.inputLastName,
      inputDNI: this.entradasForm.value.inputDNI,
      inputContactNumber: this.entradasForm.value.inputContactNumber,
      inputEmail: this.entradasForm.value.inputEmail,
      inputAddress: this.entradasForm.value.inputAddress,
      inputCreditCard: this.entradasForm.value.inputCreditCard,
    }

    this.loading = true;
    this.entradasService.guardarEntrada(entrada).then(() => {
      this.loading = false;
      console.log('tarjeta registrado');
      this.toastr.success('Compra con exito!', 'Compra registrada')
      this.entradasForm.reset();
    }, error => {
      this.loading = false;
      this.overlay = true;
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
