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
    id: number,
    nombre: string,
    informacion_larga: string,
    informacion_corta: string,
    fecha: string,
    foto: string,
    precio: string,
    lugar: string,
    categorias: Array<string>
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
