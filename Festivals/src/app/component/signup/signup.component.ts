import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

  myfood: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeRoute() {
    if (this.myfood == "usuario"){
      this.router.navigate(['/', 'signupUsers']);
    } else if (this.myfood == "empresa") {
      this.router.navigate(['/', 'signupBussines']);
    } else {
      alert("Selecciona una opción");
    }
  }
}
