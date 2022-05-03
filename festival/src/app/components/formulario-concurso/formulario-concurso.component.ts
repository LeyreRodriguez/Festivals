import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConcursoService } from './../../services/concurso.service';


@Component({
  selector: 'app-formulario-concurso',
  templateUrl: './formulario-concurso.component.html',
})
export class FormularioConcursoComponent implements OnInit {
  concursoForm: FormGroup;
  loading = false;
  id: string | undefined;
  titulo = 'Agregar Tarjeta';;

  constructor(
        private fb: FormBuilder,
        private concursoService: ConcursoService,
        private toastr: ToastrService,
        ) {
    this.concursoForm = this.fb.group({
      inputNombreConcurso: ['', Validators.required],
      inputNombre: ['', Validators.required],
      inputApellidos: ['', Validators.required],
      inputDni: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(9), Validators.pattern("[0-9]{8}[A-Za-z]{1}")]],
      inputsNcontacto: ['', Validators.required],
      inputCorreo: ['', [Validators.required, Validators.pattern("^[^@]+@[^@]+\.[a-zA-Z]{2,}$")]],
    })
   }

  ngOnInit(): void {
  }

  agregarConcurso() {

    const concurso: any = {
      inputNombreConcurso: this.concursoForm.value.inputNombreConcurso,
      inputNombre: this.concursoForm.value.inputNombre,
      inputApellidos: this.concursoForm.value.inputApellidos,
      inputDni: this.concursoForm.value.inputDni,
      inputsNcontacto: this.concursoForm.value.inputsNcontacto,
      inputCorreo: this.concursoForm.value.inputCorreo,
    }

    this.loading = true;
    this.concursoService.guardarConcurso(concurso).then(() => {
      this.loading = false;
      console.log('tarjeta registrado');
      this.toastr.success('El usuario fue registrado con exito en el concurso!', 'Concurso registrado')
      this.concursoForm.reset();
    }, error => {
      this.loading = false;
      this.toastr.error('Opps.. ocurrio un error', 'Error');
      console.log(error);
    })
  }

  guardarConcurso() {
    if(this.id === undefined) {
      this.agregarConcurso();

    }
  }
}
