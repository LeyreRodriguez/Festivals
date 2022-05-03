import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  entradasForm: FormGroup;


  constructor(
    private fb: FormBuilder,
  ) { 

    this.entradasForm = this.fb.group({

      inputName: ['', Validators.required],
      inputLastName: ['', Validators.required],
      inputDNI: ['', Validators.required, Validators.pattern(/[0-9]{7,8}[A-Z]/)],
      inputContactNumber: ['', [Validators.required, Validators.pattern(/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/)]],
      inputEmail: ['', [Validators.required, Validators.pattern(/[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/)]],
      inputAddress: ['', Validators.required],
      inputCreditCard: ['', [Validators.required, Validators.pattern(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$/)]]
    })
  }

  ngOnInit(): void {
  }

}
