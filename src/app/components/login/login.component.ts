import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private authSvc: AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log(this.loginForm);
    const {email, password} = this.loginForm.value;
    try {
      this.authSvc.login(email, password);
      this.router.navigate(['/home']);
    }
    catch (error) {
      console.log(error);
    }
  }

}
