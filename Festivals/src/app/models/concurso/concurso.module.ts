import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class concurso {
  idFestival: number;
  nombreConcurso: string;
  descripcionConcurso: string;
  nombre: string;
  apellidos: string;
  dni: string;
  nContacto: string;
  correo: string;
  fecha?: Date;

  constructor(
    @Inject(String) idFestival: number,
    @Inject(String) nombreConcurso: string,
    @Inject(String) descripcionConcurso: string,
    @Inject(String) nombre: string,
    @Inject(String) apellidos: string,
    @Inject(String) dni: string,
    @Inject(String) nContacto: string,
    @Inject(String) correo: string,
    ){
      this.idFestival = idFestival;
      this.nombreConcurso = nombreConcurso;
      this.descripcionConcurso = descripcionConcurso;
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.dni = dni;
      this.nContacto = nContacto;
      this.correo = correo;
  }
}
