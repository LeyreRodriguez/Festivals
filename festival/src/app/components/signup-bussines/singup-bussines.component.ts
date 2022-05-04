import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup-bussines',
  templateUrl: './singup-bussines.component.html',
  styleUrls: ['./singup-bussines.component.css']
})
export class SingupBussinesComponent implements OnInit {

  signupBussinesForm: FormGroup;
  constructor(
    private fb: FormBuilder,


    ) {

      this.signupBussinesForm = this.fb.group({
  
        inputBussinesName: ['', Validators.required],
        inputEmail: ['', [Validators.required, Validators.email]],
        inputPassword: ['', [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,15}$/)]]
        
      })
    }

  ngOnInit(): void {
  }

}
