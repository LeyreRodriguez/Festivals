import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {

  loginForm: FormGroup;
  previousUrl: string;
  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private router: Router,
    private location: Location,
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
      this.location.back();
      // this.router.navigate(['/mainPage']);
    }
    catch (error) {
      console.log(error);
    }
  }

  back(): void {
    this.location.back()
  }
}

