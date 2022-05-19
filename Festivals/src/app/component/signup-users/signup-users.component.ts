import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-users',
  templateUrl: './signup-users.component.html',
  styleUrls: ['./signup-users.component.scss'],
  providers: [AuthService]
})
export class SignupUsersComponent implements OnInit {

  registerForm: FormGroup;
  
  constructor(private fb: FormBuilder, private authSvc: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,15}$/)]],
      username: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onRegister() {
    const password = this.registerForm.get('password')?.value

    const user: User = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      photoUrl: "",
      company: false,
      admin: false,
      festivalesFavoritos: [],
      userName: this.registerForm.value.username
    }

    this.authSvc.register(user, password);

    this.router.navigate(['/', 'mainPage']);
  }
}