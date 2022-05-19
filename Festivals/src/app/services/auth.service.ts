import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/auth';
import { User } from 'src/app/interfaces/user';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';

@Injectable()

export class AuthService {

  private user: any;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log("Usuario logueado")
      } else {
        this.user = null;
        console.log("No hay usuario logueado")
      }
    });
  }

  async login(email: string, password: string) {
    if (this.user) {
      alert("Cierre sesión para entrar como otro usuario");
    } else {
      await this.afAuth.signInWithEmailAndPassword(email, password).then((userCredential) => {
        alert("Sesión iniciada");
        window.location.assign('/');
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
        photoUrl: "https://firebasestorage.googleapis.com/v0/b/festival-ff759.appspot.com/o/UnloggedUser.png?alt=media&token=6a428b04-673e-454e-89d7-8f02e48683c9",
        company: user.company,
        admin: user.admin,
        festivalesFavoritos: user.festivalesFavoritos
      }).then((error) => console.log(error));

      alert("Usuario registrado satisfactoriamente");
      window.location.assign("/");
    })
  }

  async logout() {
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
    const userRef = doc(this.afs.firestore, "users", this.user.uid);
    const docu = await getDoc(userRef);

    if (docu.exists()) {
      return docu;
    }
    console.log("No existe esa referencia");
    return;
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

  updateUser(user: User) {
    this.afs.doc("users/" + this.user.uid).update({
      userName: user.userName
    });
  }

  getUserUid(): string {
    return this.user.uid;
  }
}
