// Angular tools
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

// Models
import { Auth } from '../model/login.model';
import { TokenService } from './token.service';
import { ProfileInformation } from '../../views/models/profile';
import { InformationUser } from 'src/app/shared/models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrlLogin = 'http://localhost:3000/api/login';
  private apiUrlLogOut = 'http://localhost:3000/api/logout';
  private apiUrlgetProfile = 'http://localhost:3000/api/profile';


  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  // Post data user in DB
  login(email: string, password: string) {
    return this.http.post<Auth>(this.apiUrlLogin, { email, password })
    // .pipe(
    //   tap(response => this.tokenService.saveToken(response.access_token))
    // );
  }

  // Get Profile
  getProfile(token: string) { // Get userId for update data profile, without use the table User`s.
    const headers = new HttpHeaders();
    headers.set('Authorization', `Bearer ${token}`)
    return this.http.get<InformationUser>("http://localhost:3000/api/users/find/all");
  }

  // loginAndGet(email: string, password: string) {
  //   return this.login(email, password)
  //     .pipe(
  //       switchMap(() => this.getProfile()),
  //     )
  // }

}
