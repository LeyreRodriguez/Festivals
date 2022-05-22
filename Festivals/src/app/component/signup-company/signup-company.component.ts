import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-company',
  templateUrl: './signup-company.component.html',
})
export class SignupCompanyComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authSvc: AuthService, 
    private router: Router,) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,15}$/)]],
    })
  }
  
  ngOnInit(): void {
  }

  onRegister() {
    const password = this.registerForm.get('password')?.value

    const user: User = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.firstName,
      email: this.registerForm.value.email,
      photoUrl: "",
      company: true,
      admin: false,
      festivalesFavoritos: [],
      userName: this.registerForm.value.firstName,
    }

    console.log(user);
    this.authSvc.register(user, password);
    this.router.navigate(['/', 'mainPage']);
  }
}
