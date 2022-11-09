// Angular tools
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Model`s
import { InformationUser } from '../../models/user';
import { SignupPost } from 'src/app/shared/models/login.model'; // Login models
import { ProfileInformation } from '../../models/profile'; // Profile model
import { environment } from 'src/environments/environment';
//


@Injectable({
  providedIn: 'root'
})

export class UserService {


  private apiUrlFindAllUsers = `${environment.API_URL}/api/users/find/all`;
  private apiUrlRegister = `${environment.API_URL}/api/register`;
  private apiUrlUpdateUser = `${environment.API_URL}/api/users/`;
  private apiUrlUpdateProfile = `${environment.API_URL}/api/profile`;

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
