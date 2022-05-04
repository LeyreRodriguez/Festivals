import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

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

