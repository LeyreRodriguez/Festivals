
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionPuestoVentaService {

  constructor(private firestore: AngularFirestore) { }

  guardarVenta(puestoVenta: any): Promise<any> {
    return this.firestore.collection('puestoVenta').add(puestoVenta);
  }

  obtenerFestivales(): Observable<any> {
    return this.firestore.collection('festivales').snapshotChanges();
  }
}
