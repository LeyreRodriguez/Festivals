import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  constructor(private firestore: AngularFirestore) { }

  guardarEntrada(entrada: any): Promise<any> {
    return this.firestore.collection('entradas').add(entrada);
  }
}
