import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  //True or false loaded.
  isLoading$ = new Subject<boolean>();

  //When to show
  show(): void {
    this.isLoading$.next(true);
    console.log('El show esta andando amigo');
  }

  //when to hide.
  hide(): void {
    this.isLoading$.next(false);
    console.log('El show esta andando amigo');
  }

  constructor() { }
}
