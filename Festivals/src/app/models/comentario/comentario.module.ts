import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class  comentario {
  userName: string;
  comentario: string;
  idFestival: number;
  constructor(
    @Inject(String) userName: string,  @Inject(String) comentario: string, @Inject(String) idFestival: number,
    ){
      this.userName = userName;
      this.comentario = comentario;
      this.idFestival = idFestival;
  }
}

