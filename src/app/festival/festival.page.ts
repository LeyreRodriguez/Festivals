
import { Component, OnInit } from '@angular/core';
import { FestivalService } from '../services/festival-service.service';
import { festival } from '../models/festival/festival.module';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { comentario } from '../models/comentario/comentario.module';
import { concurso } from '../models/concurso/concurso.module';
import { empresa } from '../models/empresa/empresa.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { AuthService } from '../services/auth.service';
import { ConcursoService } from 'src/app/services/concurso.service';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.page.html',
  styleUrls: ['./festival.page.scss'],
})
export class FestivalPage implements OnInit {
  crud: CrudService;
  // authy: AuthService;
  comentariosForm: FormGroup;
  objFestival: festival[] = [];
  listComentarios: comentario[] = [];
  listConcursos: concurso[] = [];
  listEmpresas: empresa[] = [];
  id: number | undefined;
  toastr: any;
  userLogged: boolean = false;
  isCompany: boolean = false;

  constructor(
    private festivalService: FestivalService,
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private fb: FormBuilder,
    private authy: AuthService,
    private crudd: CrudService) {
      // this.authy=auth;
      this.crud=crudd;
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

  addToFavorites(){
    if (this.authy.checkIfCurrentUser()) {
      this.crud.addItem(this.authy.getUserUid(),this.id, this.objFestival[0].nombre, this.objFestival[0].informacion_corta);
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+ this.objFestival[0].informacion_corta);
      alert("SE HA AÑADIDO A TUS FAVORITOS");
      return true;
    }else{
      alert("Para añadir a favoritos tienes que estar logueado primero");
      alert("SE HA AÑADIDO A TUS FAVORITOS");
      return false;
    }
    
  }

  deleteFromFavorites(){
    if (this.authy.checkIfCurrentUser()) {
      this.crud.deleteUser(this.authy.getUserUid(),this.id);
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+ this.objFestival[0].nombre);
      alert("SE HA ELIMINADO DE TUS FAVORITOS");
      return true;
    }else{
      alert("Para añadir a eliminar de tus favoritos tienes que estar logueado primero");
      return false;
    }
  }

  checkLoggedUser() {
    this.authy.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.authy.readUser().then((data) => {
          this.isCompany = data.get!("company")
        })
        this.userLogged = true;
      } else {
        this.userLogged = false;
      }
    });
  }

  changeRoute() {
    if (this.userLogged){
      this.router.navigate(['/', 'create']);
    }
  } 

  compraRoute(){
    if (this.userLogged){
      this.router.navigate(['/', 'entradas']);
    }else{
      this.router.navigate(['/', 'signupUsers']);
    }
  }

  ventaRoute(){
    if (this.userLogged){
      this.router.navigate(['/', 'puestoVenta']);
    }else{
      this.router.navigate(['/', 'signupCompany']);
    }
  }


}


