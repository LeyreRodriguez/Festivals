import { Component, OnInit } from '@angular/core';
import { FestivalService } from 'src/app/services/festival.service';
import { festival } from 'src/app/models/festival/festival';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { comentario } from 'src/app/models/comentario/comentario.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/*
  Hay que importar festivals, para recorrer el json y saber cual es el objeto que tiene el id
  que se pasa por parámetro
*/

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.css']
})
export class FestivalComponent implements OnInit {
  /*
  Tengo que cargar componente de festival y recorrer el json para comprobar que el valro del id
  */
  comentariosForm: FormGroup;
  objFestival: festival[] = [];
  listComentarios: comentario[] = [];
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
  }

  obtenerId(){
    console.log("Entra en obtener Id");
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
    console.log("Id = " + this.id);
  }

  obtenerFestival(){
    console.log("Entra en obtener Festival");
    this.festivalService.obtenerFestival().subscribe(doc => {
      this.objFestival = [];
      doc.forEach((element: any) => {
        console.log(element.payload.doc.data().id);
        if(this.id == element.payload.doc.data().id){
          this.objFestival.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        }
      });
      console.log(this.objFestival);
    })
    console.log("Sale de obtener Festival");
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
      console.log(this.listComentarios);
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
}
