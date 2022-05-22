import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseRepositoryService {

  constructor(private storage: AngularFireStorage) { }

  // Loads file into storage
  public async csTask(file: string, data: any, id: string) {
    return await this.storage.ref("users").child(id + "/" + file).put(data)  
  }

  // File's reference
  public csReference(file: string, id: string) {
    return this.storage.ref("users").child(id + "/" + file)
  }
}
