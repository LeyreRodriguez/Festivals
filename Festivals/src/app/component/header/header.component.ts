import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userLogged = this.authService.checkIfCurrentUser();
  userPhoto: string;
  hasPhoto = false;

  // userCol: User = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   photoUrl: 'https://firebasestorage.googleapis.com/v0/b/festival-ff759.appspot.com/o/UnloggedUser.png?alt=media&token=6a428b04-673e-454e-89d7-8f02e48683c9',
  //   company: false,
  //   admin: false,
  //   festivalesFavoritos: [],
  //   userName: ''
  // };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.readImage();
    if (this.userPhoto != undefined) {
      this.hasPhoto = true;
    }
  }

  toProfile() {
    this.router.navigateByUrl('/profile');
  }

  signIn() {
    this.router.navigate(['/', 'login']);
  }

  readImage() {    
    this.authService.readUser().then((data) => {
      this.userPhoto = data.get!("photoUrl")
    })
  }

}