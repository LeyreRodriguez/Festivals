
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/auth';
import { User } from 'src/app/interfaces/user';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {

  private user: any;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
  }

  private getUser() {
    return new Promise<boolean>((resolve) => {
      this.afAuth.onAuthStateChanged((user) => {
        if (user) {
          this.user = user;
          console.log("Usuario logueado");
          resolve(true);
        } else {
          this.user = null;
          console.log("No hay usuario logueado");
          resolve(false);
        }
      });
    });
  }

  async login(email: string, password: string) {
    await this.getUser();

    if (this.user) {
      alert("Cierre sesión para entrar como otro usuario");
    } else {
      await this.afAuth.signInWithEmailAndPassword(email, password).then((userCredential) => {
        alert("Sesión iniciada");
        this.router.navigate(['/mainPage']);
      }).catch(error => {
        console.log("Error " + error.code + " message " + error.message);
        alert("Los datos introducidos son incorrectos");
      })
    }
  }

  async register(user: User, password: string) {
    await this.afAuth.createUserWithEmailAndPassword(user.email, password).then(async (userCredential) => {
      console.log(user.firstName, user.lastName, user.email);

      await this.afs.collection('users').doc(userCredential.user?.uid).set({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        photoUrl: user.photoUrl,
        company: user.company,
        admin: user.admin,
        userName: user.userName
      }).then((error) => console.log(error));

      alert("Usuario registrado satisfactoriamente");
      window.location.assign("/");
    }).catch(error => {
      console.log("Error " + error.code + " message " + error.message);
      alert("Este usuario ya existe. Por favor, utilice otras credenciales");
    })
  }

  async logout() {
    await this.getUser();

    if (this.user) {
      await this.afAuth.signOut().then((value) => {
        alert("Sesión cerrada");
        window.location.assign('/');
      })
    } else {
      alert("No hay sesión para cerrar");
    }
  }

  async readUser() {
    await this.getUser();

    const userRef = doc(this.afs.firestore, "users", this.user.uid);
    const docu = await getDoc(userRef);

    if (docu.exists()) {
      return docu;
    }
    console.log("No existe esa referencia");
    return;
  }

  async updateUser(userName: string) {
    await this.getUser();
    this.afs.doc("users/" + this.user.uid).update({
      userName: userName
    });
  }

  getUserUid(): string {
    return this.user.uid;
  }

  async updateUserPhoto(url: string) {
    await this.getUser();

    this.afs.doc("users/" + this.user.uid).update({
      photoUrl: url
    });
  }

  checkIfCurrentUser(): boolean {
    if (this.user != null) {
      console.log("Hay un usuario loggeado");
      return true;
    } else {
      console.log("No hay un usuario loggeado");
      return false;
    }
  }
}
