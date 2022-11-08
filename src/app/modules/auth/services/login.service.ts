// Angular tools
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Models
import { SigninPost, SignupPost, SigninGet, SignupGet, } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrlLogin = 'http://localhost:3000/api/login';
  private apiUrlLogOut = 'http://localhost:3000/api/logout';
  private apiUrlgetProfile = 'http://localhost:3000/api/getUser';

  constructor(
    private http: HttpClient,
  ) { }

  // Post data user in DB
  login(dto: SigninPost) {
    return this.http.post<SigninPost>(this.apiUrlLogin, dto);
  }
  // Get data Profile ID DB
  profile(dto: SigninGet) {
    return this.http.get<SigninGet>(this.apiUrlgetProfile);
  }

  // Post data Profile for Update



}
