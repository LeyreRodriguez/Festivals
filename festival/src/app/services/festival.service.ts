import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  constructor(private firestore: AngularFirestore) { }

  obtenerFestival(): Observable<any> {
    return this.firestore.collection('festivales').snapshotChanges();
  }

  obtenerComentarios(): Observable<any> {
    return this.firestore.collection('comentarios').snapshotChanges();
  }

  agregarComentarios(comentario: any): Promise<any> {
    return this.firestore.collection('comentarios').add(comentario);
  }
}
