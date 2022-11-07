import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Ambient
import { environment } from 'src/environments/environment';
// Model
import { InformationUser } from '../models/user';
import { SignupPost, SignupGet } from 'src/app/modules/auth/model/login.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrlFindAll = 'http://localhost:3000/api/users/find/all';
  private apiUrlFind = 'http://localhost:3000/api/register';
  private apiUrlUpdate = 'http://localhost:3000/api/users/:id';

  constructor(
    private http: HttpClient,
  ) { }
  // Get all data user's
  dataUser() {
    return this.http.get<InformationUser[]>(this.apiUrlFindAll);
  }
  // Create new user
  create(dto: SignupPost) {
    return this.http.post<SignupPost>(this.apiUrlFind, dto)
  }

}
