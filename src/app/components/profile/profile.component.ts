import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userLogged = this.authService.getCurrentUser();
  // photoUrlDoc = this.db.doc('photoUrl');

  editDataForm = this.fb.group({
    photoUrl: [''],
  })

  constructor(
    private authService: AuthService,
    private router: Router,
    private db: AngularFirestore,
    private dbf: Firestore,
    private fb: FormBuilder,
    private auth: AngularFireAuth
    ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/', 'login']);
  }

  toHome() {
    this.router.navigate(['/', 'home']);
  }

  async addPhoto() {
    const au = getAuth();
    const user = au.currentUser;
    if (user) {
      const userRef = doc(this.dbf, 'users', user.uid);
      const photoUrlEdit = this.editDataForm.get('photoUrl')?.value;
      await updateDoc(userRef, { photoUrl: photoUrlEdit});
    }
  }

}
