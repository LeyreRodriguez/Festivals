import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FestivalesService {

  constructor(private firestore: AngularFirestore) {
  }

  obtenerFestivales(): Observable<any> {
    return this.firestore.collection('festivales').snapshotChanges();
  }
}
