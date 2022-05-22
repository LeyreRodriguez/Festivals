import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReloadHeaderService {

  constructor(
    private afs: AuthService,
  ) {
    this.afs.readUser().then((data) => {
      this.url = data.get!("photoUrl")
      this.holaquetal = new Subject<string>();
      this.holaquetal$ = this.holaquetal.asObservable();
    });
  }

  url: string = "";
  holaquetal: Subject<string>;
  holaquetal$: Observable<string>;
}
