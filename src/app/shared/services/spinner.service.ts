import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isLoading$ = new Subject<boolean>();

  show(): void {
    this.isLoading$.next(true);
    console.log('El show esta andando amigo');
  }
  hide(): void {
    this.isLoading$.next(false);
    console.log('El show esta andando amigo');
  }

  constructor() { }
}
