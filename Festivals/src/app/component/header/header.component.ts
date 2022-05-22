import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReloadHeaderService } from 'src/app/services/ReloadHeader/reload-header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userLogged: boolean;
  userPhoto: string;
  sub: Subscription;

  constructor(
    private afSvc: AuthService,
    private router: Router,
    private relHeaderSvc: ReloadHeaderService
  ) { }

  ngOnInit(): void {
    this.userData();
    // this.sub = this.relHeaderSvc.holaquetal$.subscribe((value) => {
    //   this.userPhoto = value;
    // });
  }

  toProfile() {
    this.router.navigateByUrl('/profile');
  }

  signUp() {    
    this.router.navigate(['/', 'signup']);
  }

  logIn() {
    this.router.navigate(['/', 'login']);
  }

  userData() {
    this.afSvc.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.userLogged = true;

        this.afSvc.readUser().then((data) => {
          this.userPhoto = data.get!("photoUrl")
        });

      } else {
        this.userLogged = false;
      }
    });
  }

  logout() {
    this.afSvc.logout();
  }
}