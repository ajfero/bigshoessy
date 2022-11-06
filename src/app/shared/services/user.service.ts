import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Ambient
import { environment } from 'src/environments/environment';
// Model
import { User, createUserDTO } from 'src/app/shared/models/user';

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
    return this.http.get<User[]>(this.apiUrlFindAll);
  }
  // Create new user
  create(dto: createUserDTO) {
    return this.http.post<User>(this.apiUrlFind, dto)
  }

}
