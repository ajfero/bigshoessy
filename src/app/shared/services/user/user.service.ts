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
import { map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  // Const
  headers = new Headers();
  id = this.getUser;
  token: any;


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


}
