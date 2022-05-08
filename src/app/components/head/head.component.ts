import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  userLogged = this.authService.getCurrentUser();

  userCol: User = {
    firstName: '',
    lastName: '',
    email: '',
    photoUrl: '',
    company: false,
    admin: false
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.readImage();
  }

  toProfile() {
    this.router.navigateByUrl('/profile');
  }

  signIn() {
    this.router.navigate(['/', 'login']);
  }

  readImage() {
    this.authService.readUser()?.then((response) => {
      if(response == undefined) {
        return undefined;       
      }
      return this.userCol = response; 
    })
  }

}
