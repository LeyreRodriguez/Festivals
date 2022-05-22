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
  constructor(
    @Inject(String) userName: string,  @Inject(String) comentario: string,
    ){
      this.userName = userName;
      this.comentario = comentario;
  }
}

