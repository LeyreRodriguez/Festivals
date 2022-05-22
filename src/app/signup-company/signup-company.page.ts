import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-company',
  templateUrl: './signup-company.page.html',
  styleUrls: ['./signup-company.page.scss'],
  providers: [AuthService]
})
export class SignupCompanyPage implements OnInit {

  signupBussinesForm: FormGroup;
  
  constructor(private fb: FormBuilder, private authSvc: AuthService, private router: Router) {
    this.signupBussinesForm = this.fb.group({
      bussinessName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,15}$/)]]
    })
  }

  ngOnInit(): void {
  }

  onRegister() {
    const password = this.signupBussinesForm.get('password')?.value

    const user: User = {
      firstName: "",
      lastName: "",
      email: this.signupBussinesForm.value.email,
      photoUrl: "https://firebasestorage.googleapis.com/v0/b/festival-ff759.appspot.com/o/Company-photo.png?alt=media&token=8f0e5a42-ef4c-4f22-af4f-b377d0e86e4a",
      company: true,
      admin: false,
      userName: this.signupBussinesForm.value.bussinessName,
      festivalesFavoritos: [],
    }

    this.authSvc.register(user, password);

    this.router.navigate(['/', 'mainPage']);
  }
}

