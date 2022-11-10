import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }

  saveUser(id: string) {
    localStorage.setItem('id', id);
  }

  getUser() {
    const id = localStorage.getItem('id')
    return id;
  }
}
