import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})


export class  empresa {
  idFestival: number;
  inputContestName: string;
  inputName: string;
  inputLastName: string;
  inputDNI: string;
  inputContactNumber: string;
  inputEmail: string;
  inputBusinessName: string;
  inputDescription: string;
  constructor(
    @Inject(String) idFestival: number,
    @Inject(String) inputContestName: string,
    @Inject(String) inputName: string,
    @Inject(String) inputLastName: string,
    @Inject(String) inputDNI: string,
    @Inject(String) inputContactNumber: string,
    @Inject(String) inputEmail: string,
    @Inject(String) inputBusinessName: string,
    @Inject(String) inputDescription: string,
    ){
      this.idFestival = idFestival;
      this.inputContestName = inputContestName;
      this.inputName = inputName;
      this.inputLastName = inputLastName;
      this.inputDNI = inputDNI;
      this.inputContactNumber = inputContactNumber;
      this.inputEmail = inputEmail;
      this.inputBusinessName = inputBusinessName;
      this.inputDescription = inputDescription;
  }
}
