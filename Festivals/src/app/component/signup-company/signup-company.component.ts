import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-company',
  templateUrl: './signup-company.component.html',
})
export class SignupCompanyComponent implements OnInit {

  signupBussinesForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signupBussinesForm = this.fb.group({

      inputBussinesName: ['', Validators.required],
      inputEmail: ['', [Validators.required, Validators.email]],
      inputPassword: ['', [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,15}$/)]]

    })
  }

  ngOnInit(): void {
  }

}
