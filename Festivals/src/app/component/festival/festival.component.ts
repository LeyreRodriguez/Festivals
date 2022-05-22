import { Component, OnInit } from '@angular/core';
import { FestivalService } from '../../services/festival-service.service';
import { festival } from '../../models/festival/festival.module';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { comentario } from '../../models/comentario/comentario.module';
import { concurso } from '../../models/concurso/concurso.module';
import { empresa } from '../../models/empresa/empresa.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ConcursoService } from 'src/app/services/concurso.service';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.scss'],
})
export class FestivalComponent implements OnInit {
  comentariosForm: FormGroup;
  objFestival: Array<festival> = new Array();
  listComentarios: comentario[] = [];
  listConcursos: concurso[] = [];
  listEmpresas: empresa[] = [];
  id: number | undefined;
  toastr: any;
  userLogged: boolean = false;
  isCompany: boolean = false;

  constructor(
    private festivalService: FestivalService,
    private concursoService: ConcursoService,
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService,) {
      this.comentariosForm = this.fb.group({
        userName: ['', Validators.required],
        comentario: ['', Validators.required],
      })
    }

  ngOnInit(): void {
    this.checkLoggedUser();
    this.obtenerFestival();
    this.obtenerId();
    this.obtenerComentarios();
    this.obtenerConcursos();
    this.obtenerEmpresas();
  }

  obtenerId(){
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }

  obtenerFestival(){
    this.festivalService.obtenerFestival().subscribe(doc => {
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
        if(this.id == element.payload.doc.data().idFestival){
          this.listComentarios.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        }
      });
    })
  }

  agregarComentarios() {
    const comentario: any = {
      userName: this.comentariosForm.value.userName,
      comentario: this.comentariosForm.value.comentario,
    }
    comentario.idFestival = this.id;

    this.festivalService.agregarComentarios(comentario).then(() => {
      this.comentariosForm.reset();
    }, error => {
      this.toastr.error('Opps.. ocurrio un error', 'Error');
      console.log(error);
    })
  }

  obtenerConcursos(){
    this.concursoService.obtenerConcursosActivos().subscribe(doc => {
      doc.forEach((element: any) => {
        if(this.id == element.payload.doc.data().idFestival){
          this.listConcursos.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        }
      });
    })
  }

  obtenerEmpresas(){
    this.festivalService.obtenerEmpresas().subscribe(doc => {
      this.listEmpresas = [];
      doc.forEach((element: any) => {
        if(this.id == element.payload.doc.data().idFestival){
          this.listEmpresas.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        }
      });
    })
  }

  checkLoggedUser() {
    this.authService.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.authService.readUser().then((data) => {
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
      this.router.navigate(['/', 'favourites']);
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
