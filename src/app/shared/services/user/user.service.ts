// Angular tools
import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
=======
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

>>>>>>> Stashed changes
// Model`s
import { environment } from 'src/environments/environment';
// Decode //
import jwtDecode from 'jwt-decode';
// Service //
import { TokenService } from '../token/token.service';
import { catchError, throwError } from 'rxjs';
import { InformationUser } from '../../models/user';
<<<<<<< Updated upstream
import { map, tap } from 'rxjs';

=======
import { ProfileInformation } from '../../models/profile'; // Profile model
import { SignupPost } from 'src/app/shared/models/login.model'; // Login models
import { Access } from 'src/app/modules/views/models/access.model';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // Const
  headers = new Headers();
  id = this.getUser;
  token: any;

<<<<<<< Updated upstream

  private apiUrlFindAllUsers = `${environment.API_URL}/api/users/find/all`;
  private apiUrlUpdateUser = `${environment.API_URL}/api/users/`;
  private apiUrlUpdateProfile = `${environment.API_URL}/api/user/profile/`;

  constructor(
    private http: HttpClient, private tokenService: TokenService) {
    this.headers.append("Authorization", "Bearer " + localStorage.getItem('token'));
    this.headers.append("Content-Type", "application/json")
  }
  // token.id > get
  saveUser(user: any) {
    localStorage.setItem('user', user);
  }

  getUser() {
    const user = localStorage.getItem('user')
    return user;
  }

  profileUser(id: string) {
    const headers = new HttpHeaders({
      Authorization: `${this.headers}`,
    })

    return this.http.get(`${this.apiUrlUpdateProfile}${id}`, {
      headers,
    })
      .pipe(
        catchError((error: HttpErrorResponse) => throwError(() => error)),
        map((response: any) => {
          const InformationUserResponse: InformationUser = {
            email: response.email || '',
            id: response.email || '',
            name: response.name || '',
            profile: response.profile || {
              id: response.id || '',
              userId: response.userId || '',
              name: response.name || '',
              email: response.email || '',
              lastName: response.lastName || '',
              socialRed: response.socialRed || '',
              phone: response.phone || 0,
              imageUrl: response.imageUrl || ''
            }
          }
          return InformationUserResponse;
        })
      )
  };

=======
  // User routes
  private apiUrlFindAllUsers = 'http://localhost:3000/api/users/find/all'; // allUsers
  private apiUrlRegister = 'http://localhost:3000/api/register';           // register
  private apiUrlUsers = 'http://localhost:3000/api/users/';               // updateUser //finOne user

  // Profile routes
  private apiUrlFindAllProfiles = 'http://localhost:3000/api/user/profile';
  private apiUrlProfile = 'http://localhost:3000/api/user/profile';

  constructor(
    private http: HttpClient,
  ) { }


  //************ Users ******************/

  // Create new user.
  registerUser(dto: SignupPost) {
    return this.http.post<SignupPost>(this.apiUrlRegister, dto)
  }

  // Create new user (email and password)
  getUser() {
    return this.http.get<SignupPost>(this.apiUrlUsers)
  }

  // Get all users with those data.
  updateDataUserAccess(model: Access) {
    return this.http.patch<Access>(this.apiUrlFindAllUsers, model);
  }


  //************ Profiles ****************/

  // Get Profile
  getProfile(token: string, id: string) { // Get userId for update data profile, without use the table User`s.
    const headers = new HttpHeaders();
    headers.set('Authorization', `Bearer ${token}`)
    return this.http.get<InformationUser>(`${this.apiUrlProfile}${id}`); // `${this.apiUrlgetProfile}${id}`
  }

  // Update Profile
  // updateProfile(dto: ProfileInformation, token: string, id: string) { // Get userId for update data profile, without use the table User`s.
  //   const headers = new HttpHeaders();
  //   headers.set('Authorization', `Bearer ${token}`)
  //   return this.http.patch<InformationUser>(`${this.apiUrlProfiles}${id}`, dto); // `${this.apiUrlgetProfile}${id}`
  // }
>>>>>>> Stashed changes

}
