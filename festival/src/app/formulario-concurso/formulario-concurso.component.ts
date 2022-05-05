import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConcursoService } from './../../services/concurso.service';

@Component({
  selector: 'app-formulario-concurso',
  templateUrl: './formulario-concurso.component.html',
  styleUrls: ['./formulario-concurso.component.css']
})
export class FormularioConcursoComponent implements OnInit {
  concursoForm: FormGroup;
  loading = false;
  overlay = false;
  id: string | undefined;
  titulo = 'Agregar Tarjeta';

  constructor(
        private fb: FormBuilder,
        private concursoService: ConcursoService,
        private toastr: ToastrService,
        ) {
    this.concursoForm = this.fb.group({
      inputContestName: ['', Validators.required],
      inputName: ['', Validators.required],
      inputLastName: ['', Validators.required],
      inputDNI: ['', Validators.required, Validators.pattern(/([0-9]{7,8}[A-Z])/)],
      inputContactNumber: ['', [Validators.required, Validators.pattern(/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/)]],
      inputEmail: ['', [Validators.required, Validators.pattern(/[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/)]]
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
      this.overlay = true;
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
