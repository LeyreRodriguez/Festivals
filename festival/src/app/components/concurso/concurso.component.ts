import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { concurso } from 'src/app/models/concurso/concurso.module';
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
  tutorialsRef: AngularFirestoreCollection<concurso>;

  constructor(
        private fb: FormBuilder,
        private concursoService: ConcursoService,
        private toastr: ToastrService,
        private db: AngularFirestore,
        ) {
    this.concursoForm = this.fb.group({
      inputContestName: ['', Validators.required],
      inputName: ['', Validators.required],
      inputLastName: ['', Validators.required],
      inputDNI: ['', Validators.required, Validators.pattern(/([0-9]{7,8}[A-Z])/)],
      inputContactNumber: ['', [Validators.required, Validators.pattern(/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/)]],
      inputEmail: ['', [Validators.required, Validators.pattern(/[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/)]]
    })

    this.tutorialsRef = db.collection('concursosExistentes');
   }

  ngOnInit(): void {
  }

  agregarConcurso() {

    const concurso: any = {
      inputContestName: this.concursoForm.value.inputContestName,
      inputName: this.concursoForm.value.inputName,
      inputLastName: this.concursoForm.value.inputLastName,
      inputDNI: this.concursoForm.value.inputDNI,
      inputContactNumber: this.concursoForm.value.inputContactNumber,
      inputEmail: this.concursoForm.value.inputEmail,
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

  getAll(): AngularFirestoreCollection<concurso> {
    return this.tutorialsRef;
  }
}
