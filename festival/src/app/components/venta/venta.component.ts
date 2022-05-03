import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  ventaForm: FormGroup;
  constructor(
    private fb: FormBuilder,


    ) {
      
      this.ventaForm = this.fb.group({
        
        inputContestName: ['', Validators.required],
        inputName: ['', Validators.required],
        inputLastName: ['', Validators.required],
        inputDNI: ['', Validators.required, Validators.pattern(/[0-9]{7,8}[A-Z]/)],
        inputContactNumber: ['', [Validators.required, Validators.pattern(/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/)]],
        inputEmail: ['', [Validators.required, Validators.pattern(/[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/)]],
        inputBussinesName: ['', Validators.required],
        inputDescription: ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

}


