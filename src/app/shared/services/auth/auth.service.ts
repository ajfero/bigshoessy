// Angular tools
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
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
  private apiUrlgetProfile = `${environment.API_URL}/api/user/`;


  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  // Post data user in DB
  login(email: string, password: string) {
    return this.http.post<Auth>(this.apiUrlLogin, { email, password })
      .pipe(
        tap(response =>
          this.tokenService.saveToken(response.token)
        )
      );
  }
}
