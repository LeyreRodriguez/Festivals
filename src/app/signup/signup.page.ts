import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  myfood: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeRoute() {
    if (this.myfood == "usuario"){
      console.log("KADKJASFDKHASDFKHLADSFKJ");
      this.router.navigate(['/', 'signup-users']);
    } else if (this.myfood == "empresa") {
      this.router.navigate(['/', 'signup-company']);
    } else {
      alert("Selecciona una opción");
    }
  }

  updateUser($event){
    this.myfood=$event.target.value;
    console.log("EL EVENT TARGET ESSS:"+$event.target.value);

  }

  onChange($event){
    console.log($event.target.value);
    }
}
 