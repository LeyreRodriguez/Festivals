import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class festival { 
  id: number;
  nombre: string;
  informacion_larga: string;
  informacion_corta: string;
  fecha: string;
  foto: string;
  precio: string;
  lugar: string;
  categorias: Array<string>;

  constructor(
    @Inject(Number) id: number,
    @Inject(String) nombre: string,
    @Inject(String) informacion_larga: string,
    @Inject(String) informacion_corta: string,
    @Inject(String) fecha: string,
    @Inject(String) foto: string,
    @Inject(String) precio: string,
    @Inject(String) lugar: string,
    @Inject(String) categorias: Array<string>
    ){
      this.id = id;
      this.nombre = nombre;
      this.informacion_larga = informacion_larga;
      this.informacion_corta = informacion_corta;
      this.fecha = fecha;
      this.foto = foto;
      this.precio = precio;
      this.lugar = lugar;
      this.categorias = categorias;
  }

}
