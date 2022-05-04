import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-concurso',
  templateUrl: './concurso.component.html',
  styleUrls: ['./concurso.component.css']
})
export class ConcursoComponent implements OnInit {

  concursoForm: FormGroup;
  constructor(
    private fb: FormBuilder,


    ) {
      
this.concursoForm = this.fb.group({
  
  inputContestName: ['', Validators.required],
  inputName: ['', Validators.required],
  inputLastName: ['', Validators.required],
  inputDNI: ['', Validators.required, Validators.pattern(/([0-9]{7,8}[A-Z])/)],
  inputContactNumber: ['', [Validators.required, Validators.pattern(/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/)]],
  inputEmail: ['', [Validators.required, Validators.pattern(/[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/)]]
  
})
}

//constructor(){}

  ngOnInit(): void {
  }

}
