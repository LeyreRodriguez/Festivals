import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private firestore: AngularFirestore) { }

  obtenerFestivales(): Observable<any> {
    return this.firestore.collection('tipoFestivales').snapshotChanges();
  }
}
