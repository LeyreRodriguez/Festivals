import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myfood: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeRoute() {
    if (this.myfood == "usuario"){
      this.router.navigate(['/', 'user_reg']);
    } else if (this.myfood == "empresa") {
      this.router.navigate(['/', 'company_reg']);
    } else {
      alert("Selecciona una opción");
    }
  }

}
