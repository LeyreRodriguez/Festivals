import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { festivales } from '../models/festival/festivales';

@Injectable({
  providedIn: 'root'
})
export class FestivalesService {

  private dbPath = '/festivales';

  items: AngularFireList<festivales>;

  // constructor(private http: HttpClient) { }
  constructor(private db: AngularFireDatabase) {
    this.items = db.list(this.dbPath);
  }

  getFestivales(): AngularFireList<festivales> {
    return this.items;
  }

  /*getNombre(id: number, i: string): string {
    return this.items.get(i);
  }

  getInformacion_larga(id: number, i: string): string {
    return this.items.get(i);
  }

  getInformacion_corta(id: number, i: string): string {
    return this.items.get(i);
  }

  getFechaa(id: number, i: string): string {
    return this.items.get(i);
  }

  getFoto(id: number, i: string): string {
    return this.items.get(i);
  }

  getPrecio(id: number, i: string): string {
    return this.items.get(i);
  }

  getLugar(id: number, i: string): string {
    return this.items.get(i);
  }

  getCategorias(id: number, i: string): AngularFireList<string> {
    return this.items.get(i);
  }*/

  create(festival: festivales): any {
    return this.items.push(festival);
  }

  update(key: string, value: any): Promise<void> {
    return this.items.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.items.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.items.remove();
  }
}
