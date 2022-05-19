
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private router: Router
  ) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,15}$/)]]
    })
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log(this.loginForm);

    const {email, password} = this.loginForm.value;
    try {
      this.authSvc.login(email, password);
      this.router.navigate(['/mainPage']);
    }
    catch (error) {
      console.log(error);
    }
  }

}

