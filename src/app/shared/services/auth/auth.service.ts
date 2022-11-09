// Angular tools
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';
// Models
import { Auth } from '../../models/login.model';
import { InformationUser } from 'src/app/shared/models/user';
//Service
import { TokenService } from '../token/token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrlLogin = `${environment.API_URL}/api/login`;
  private apiUrlLogOut = `${environment.API_URL}/api/logout`;
  private apiUrlgetProfile = `${environment.API_URL}/api/user/profile`;


  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  // Post data user in DB
  login(email: string, password: string) {
    return this.http.post<Auth>(this.apiUrlLogin, { email, password })
      .pipe(
        tap(response => this.tokenService.saveToken(response.token))
      );
  }

  // Get Profile
  getProfile(token: string) { // Get userId for update data profile, without use the table User`s.
    console.log({ HTTP_CLIENT: this.http });
    return this.http.get<InformationUser[]>(this.apiUrlgetProfile);
  }

  // loginAndGet(email: string, password: string) {
  //   return this.login(email, password)
  //     .pipe(
  //       switchMap(() => this.getProfile()),
  //     )
  // }

}
