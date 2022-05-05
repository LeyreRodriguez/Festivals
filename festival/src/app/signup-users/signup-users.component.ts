import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-users',
  templateUrl: './signup-users.component.html',
})
export class SignupUsersComponent implements OnInit {

  signupUsersForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signupUsersForm = this.fb.group({
      inputName: ['', Validators.required],
      inputLastName: ['', Validators.required],
      inputEmail: ['', [Validators.required, Validators.email]],
      inputPassword: ['', [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,15}$/)]]
    })
  }

  ngOnInit(): void {
  }

}
