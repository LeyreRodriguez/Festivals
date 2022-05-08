import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/auth';
import { first } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { getAuth } from 'firebase/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private db: Firestore
  ) { }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    }
    catch (error) {
      console.log(error);
      return 400;
    }
  }

  async register(user: User, password: string) {
    try {
      // const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      // return result;
      return new Promise<any>((resolve, reject) => {
        this.afAuth.createUserWithEmailAndPassword(user.email, password).then(async res => {
          // await this.afs.collection('users').add(user) //doc(res.user?.uid) // ADD(user)          
          if (res.user?.uid != undefined) {
            const ref = await setDoc(doc(this.db, 'users', res.user?.uid), user)
            console.log(res.user?.uid);
          }          
        })
      })
    }
    catch (error) {
      console.log(error);
      return 400;
    }    
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      return;
    }
    catch (error) {
      console.log(error);
      return 400;
    }

  }

  getCurrentUser() {
    try {
      return this.afAuth.authState.pipe(first()).toPromise();
    }

    catch(error) {
      console.log(error);
      return;
    }    
  }

  async readUser() {
    const au = getAuth();
    const user = au.currentUser;
    if (user) {
      const userRef = doc(this.db, 'users', user.uid);
      const docu = await getDoc(userRef);
      if (docu.exists()) {
        return docu.data();
      }
      return;
    }
    return;
  }
}
