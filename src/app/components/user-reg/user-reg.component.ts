import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interfaces/user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  registerForm = this.fb.group({    
    firstName: ['', Validators.required],
    lastName: ['', Validators.required], 
    email: ['', Validators.required],
    password: ['', Validators.required],  
  })

  constructor(private authSvc: AuthService, private fb: FormBuilder,) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    const password = this.registerForm.get('password')?.value;
    
    const user: User = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      photoUrl: '',
      company: false ,
      admin: false
    };

    this.authSvc.register(user, password);
  }

}
