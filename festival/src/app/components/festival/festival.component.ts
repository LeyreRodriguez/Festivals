import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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

  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    // let id = this.rutaActiva.snapshot.paramMap.get('id');
  }

}
