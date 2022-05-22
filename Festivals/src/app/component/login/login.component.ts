
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    const {email, password} = this.loginForm.value;
    try {
      const logInSucc = this.authSvc.login(email, password);    
    }
    catch (error) {
      console.log(error);
    }
  }

}

