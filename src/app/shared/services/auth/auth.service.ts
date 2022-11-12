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
<<<<<<< Updated upstream
import { UserService } from '../user/user.service';
import { Store } from '../../models/store';
import { RouterModule, Router } from '@angular/router';


=======
import { ProfileInformation } from '../../models/profile';
import { InformationUser } from 'src/app/shared/models/user';
import { Profile } from 'src/app/modules/views/models/profile';
>>>>>>> Stashed changes
@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< Updated upstream
  private apiUrlLogin = `${environment.API_URL}/api/login`;
  private apiUrlLogOut = `${environment.API_URL}/api/logout`;
  private apiUrlRegister = `${environment.API_URL}/api/register`;
=======

  private apiUrlLogin = 'http://localhost:3000/api/login'; // login
  private apiUrlLogOut = 'http://localhost:3000/api/logout'; // logout
  private apiUrlgetProfile = 'http://localhost:3000/api/user/profile'; // profile
>>>>>>> Stashed changes


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

<<<<<<< Updated upstream
  loginUser(email: string, password: string) {
    // console.log({ HTTP_ERROR: this.http })
    return this.http.post<Store>(this.apiUrlLogin, { email, password })
      .pipe(
        tap(res =>
          this.userService.saveUser(res.user)
        )
      );
=======
  // Get Profile
  getProfile() { // Get userId for update data profile, without use the table User`s.
    return this.http.get<Profile>(this.apiUrlgetProfile); // `${this.apiUrlgetProfile}${id}`

>>>>>>> Stashed changes
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
  // profileUser(id: string) {
  //   console.log({ HTTP_PROFILE: this.http })
  //   return this.http.get<Store>(`${this.apiUrlUpdateProfile}${id}`)
  // }

}
