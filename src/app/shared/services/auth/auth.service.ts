// Angular tools
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
// Models
import { Auth } from '../../models/login.model';
import { SignupPost } from '../../models/login.model';
//Service
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';
import { Store } from '../../models/store';
import { RouterModule, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrlLogin = `${environment.API_URL}/api/login`;
  private apiUrlLogOut = `${environment.API_URL}/api/logout`;
  private apiUrlRegister = `${environment.API_URL}/api/register`;


  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private userService: UserService,
    private route: Router
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
  // Get data user.
  loginUser(email: string, password: string) {
    // console.log({ HTTP_ERROR: this.http })
    return this.http.post<Store>(this.apiUrlLogin, { email, password })
      .pipe(
        tap(res =>
          this.userService.saveUser(res.user)
        )
      );
  }
  // Create new user
  registerUser(dto: SignupPost) {
    return this.http.post<SignupPost>(this.apiUrlRegister, dto)
  }
  public logOut(): any {
    let headers = new Headers({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'Content-type': 'application/json',
    },
    )
    this.route.navigate(['/home'])
    localStorage.removeItem('user');
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
    return this.http.post(this.apiUrlLogOut, { header: headers });
  }
}