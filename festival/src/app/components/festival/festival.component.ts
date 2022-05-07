import { Component, OnInit } from '@angular/core';
import { FestivalService } from 'src/app/services/festival.service';
import { festival } from 'src/app/models/festival/festival';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  objFestival: festival[] = [];
  id: number | undefined;

  constructor(
    private festivalService: FestivalService,
    private router: Router,
    private rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    this.obtenerFestival();
    this.obtenerId();
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
}
