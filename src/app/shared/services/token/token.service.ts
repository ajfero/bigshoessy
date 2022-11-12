import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HomeComponent } from 'src/app/modules/views/views/home/home.component';


@Injectable({
  providedIn: 'root'
})
export class TokenService {


  constructor(private router: Router, private httpClient: HttpClient) {
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
}
