import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConcursoService {

  private concurso$ = new Subject<any>();

  constructor(private firestore: AngularFirestore) { }

  guardarConcurso(concurso: any): Promise<any> {
    return this.firestore.collection('concursos').add(concurso);
  }

  getConcursos(): Observable<any> {
    return this.firestore.collection('concursos', ref => ref.orderBy('fecha', 'asc')).snapshotChanges();
  }

  eliminarConcurso(id: string): Promise<any> {
    return this.firestore.collection('concursos').doc(id).delete();
  }

  getConcurso(id: string): Observable<any> {
    return this.firestore.collection('concursos').doc(id).snapshotChanges();
  }

  editarConcurso(id: string, concurso: any): Promise<any> {
    return this.firestore.collection('concursos').doc(id).update(concurso);
  }

  obtenerConcursos(): Observable<any> {
    return this.firestore.collection('concursosExistentes').snapshotChanges();
  }
}
