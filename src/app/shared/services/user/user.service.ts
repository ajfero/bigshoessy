// Angular tools
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Model`s
import { InformationUser } from '../../models/user';
import { SignupPost } from 'src/app/shared/models/login.model'; // Login models
import { ProfileInformation } from '../../models/profile'; // Profile model

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrlFindAllUsers = 'http://localhost:3000/api/users/find/all';
  private apiUrlRegister = 'http://localhost:3000/api/register';
  private apiUrlUpdateUser = 'http://localhost:3000/api/users/';
  private apiUrlUpdateProfile = 'http://localhost:3000/api/profile';

  constructor(
    private http: HttpClient,
  ) { }

  // Create new user
  registerUser(dto: SignupPost) {
    return this.http.post<SignupPost>(this.apiUrlRegister, dto)
  }
  // Get all data user's
  dataUser() {
    return this.http.get<InformationUser[]>(this.apiUrlFindAllUsers);
  }

  // Patch Profile
  updateProfile(dto: ProfileInformation) {
    return this.http.patch<ProfileInformation[]>(this.apiUrlUpdateProfile, dto)
  }
}
