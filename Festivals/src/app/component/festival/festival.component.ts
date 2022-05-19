import { Component, OnInit } from '@angular/core';
import { FestivalService } from '../../services/festival-service.service';
import { festival } from '../../models/festival/festival.module';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { comentario } from '../../models/comentario/comentario.module';
import { concurso } from '../../models/concurso/concurso.module';
import { empresa } from '../../models/empresa/empresa.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.scss'],
})
export class FestivalComponent implements OnInit {
  comentariosForm: FormGroup;
  objFestival: festival[] = [];
  listComentarios: comentario[] = [];
  listConcursos: concurso[] = [];
  listEmpresas: empresa[] = [];
  id: number | undefined;
  toastr: any;

  constructor(
    private festivalService: FestivalService,
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private fb: FormBuilder,) {
      this.comentariosForm = this.fb.group({
        userName: ['', Validators.required],
        comentario: ['', Validators.required],
      })
    }

  ngOnInit(): void {
    this.obtenerFestival();
    this.obtenerId();
    this.obtenerComentarios();
    this.obtenerConcursos();
    this.obtenerEmpresas();
  }

  obtenerId(){
    console.log("Entra en obtener Id");
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }

  obtenerFestival(){
    this.festivalService.obtenerFestival().subscribe(doc => {
      this.objFestival = [];
      doc.forEach((element: any) => {
        if(this.id == element.payload.doc.data().id){
          this.objFestival.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        }
      });
    })
  }

  obtenerComentarios(){
    this.festivalService.obtenerComentarios().subscribe(doc => {
      this.listComentarios = [];
      doc.forEach((element: any) => {
        this.listComentarios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }

  agregarComentarios() {
    const entrada: any = {
      userName: this.comentariosForm.value.userName,
      comentario: this.comentariosForm.value.comentario,
    }

    this.festivalService.agregarComentarios(entrada).then(() => {
      this.comentariosForm.reset();
    }, error => {
      this.toastr.error('Opps.. ocurrio un error', 'Error');
      console.log(error);
    })
  }

  obtenerConcursos(){
    this.festivalService.obtenerConcursos().subscribe(doc => {
      this.listConcursos = [];
      doc.forEach((element: any) => {
        this.listConcursos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }

  obtenerEmpresas(){
    this.festivalService.obtenerEmpresas().subscribe(doc => {
      this.listEmpresas = [];
      doc.forEach((element: any) => {
        this.listEmpresas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.listEmpresas);
    })
  }
}


