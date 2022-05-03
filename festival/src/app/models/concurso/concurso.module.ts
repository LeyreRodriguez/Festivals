export class concurso {
  id?: string;
  nombreConcurso: string;
  nombre: string;
  apellidos: string;
  dni: string;
  nContacto: string;
  correo: string;
  fecha?: Date;

  constructor(
    nombreConcurso: string,
    nombre: string,
    apellidos: string,
    dni: string,
    nContacto: string,
    correo: string,
    ){
      this.nombreConcurso = nombreConcurso;
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.dni = dni;
      this.nContacto = nContacto;
      this.correo = correo;
  }
}
