// Angular tools
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// Model`s
import { environment } from 'src/environments/environment';
// Decode //
import jwtDecode from 'jwt-decode';
// Service //
import { TokenService } from '../token/token.service';
import { catchError, throwError } from 'rxjs';
import { InformationUser } from '../../models/user';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  // Const
  headers = new Headers();

  private apiUrlFindAllUsers = `${environment.API_URL}/api/users/find/all`;
  private apiUrlUpdateUser = `${environment.API_URL}/api/users/`;
  private apiUrlUpdateProfile = `${environment.API_URL}/api/user/profile/`;

  constructor(
    private http: HttpClient) {
    this.headers.append("Authorization", "Bearer " + localStorage.getItem('token'));
    this.headers.append("Content-Type", "application/json")
  }
  // Save user as item.
  saveUser(user: any) {
    localStorage.setItem('user', user);
  }
  // Get user data.
  getUser() {
    const user = localStorage.getItem('user')
    return user;
  }
  // Get user profile for dump information in view.
  profileUser(id: string) {
    // Authorization match-rout in back-end.
    const headers = new HttpHeaders({
      Authorization: `${this.headers}`,
    })
    // Get data at URL.
    return this.http.get(`${this.apiUrlUpdateProfile}${id}`, {
      headers,
    })
      // Use tools pipe and map for manipulate data object and to receive in profileModel view profile.
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
}
