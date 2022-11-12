// Angular tools
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
// Models
import { Auth } from '../../models/login.model';
import { SignupPost } from '../../models/login.model';
import { AllUser } from '../../models/alluser';
//Service
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';


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

  // Post data user in DB and get Token //
  login(email: string, password: string) {
    return this.http.post<Auth>(this.apiUrlLogin, { email, password })
      .pipe(
        tap(response =>
          this.tokenService.saveToken(response.token)
        )
      );
  }

  // Get data user for handle //
  loginUser(email: string, password: string) {
    return this.http.post<AllUser>(this.apiUrlLogin, { email, password })
      .pipe(
        tap(res =>
          this.userService.saveUser(res.user)
        )
      );
  }

  // Create new user //
  registerUser(dto: SignupPost) {
    return this.http.post<SignupPost>(this.apiUrlRegister, dto)
  }

  //Remove logged session //
  public logOut(): any {
    let headers = new Headers({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'Content-type': 'application/json',
    },
    )
    this.route.navigate(['/home'])
    localStorage.removeItem('token');
    return this.http.post(this.apiUrlLogOut, { header: headers });
  }
}