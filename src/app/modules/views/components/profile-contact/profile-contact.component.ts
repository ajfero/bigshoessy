// Angular tools.
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
// Service
import { UserService } from 'src/app/shared/services/user/user.service';
import { TokenService } from 'src/app/shared/services/token/token.service';
// Model
import { ProfileInformation } from '../../../../shared/models/profile';
import { InformationUser } from 'src/app/shared/models/user';
// Decode
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-profile-contact',
  templateUrl: './profile-contact.component.html',
  styleUrls: ['./profile-contact.component.scss']
})
export class ProfileContactComponent {
  // Type status
  statusDetail: 'loading' | 'sucess' | 'error' | 'init' = 'init';
  // Decode //
  token: any;
  // Saved data information user.
  profiles: InformationUser[] = [];

  // Declared and defined form profile.
  profileForm = this.fb.group({
    id: '',
    userId: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
    lastName: [''],
    socialRed: [''],
    phone: [''],
    ImageUrl: ['']
  });
  // Validators form
  private _buildForm(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      userId: ['', Validators.required],
      name: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      lastName: [''],
      email: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      socialRed: [''],
      phone: [''],
      imageUrl: ['']
    })
  }
  // Service and declarations.
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private tokenService: TokenService
  ) {
    this.profileForm = this._buildForm()
    this.token = this.tokenService.getToken();
    // Decode token for get user.ID. //
    if (this.token) {
      this.token = jwt_decode(this.token)
    } else {
    }
  }
  // Subscribe data in profileModel //
  async profileData() {
    this.userService.profileUser(this.token.id)
      .subscribe(res => {
        this.profileModel = res;
        console.log(this.profileModel)
      });
  }
  // Model for put profile response user data. //
  profileModel: InformationUser = {
    id: '',
    name: '',
    email: '',
    profile: {
      id: '',
      userId: '',
      name: 'Tomas',
      email: '',
      lastName: 'Martinez',
      socialRed: '/balu_tm',
      phone: 0,
      imageUrl: '',
    }
  }
  // Value form ? true : false //
  async patchProfile(profileValue: any) {
    try {
      const profile: InformationUser = {
        id: profileValue.id,
        name: profileValue.name,
        email: profileValue.email,
        profile: {
          id: profileValue.id,
          userId: profileValue.userId,
          name: profileValue.email,
          lastName: profileValue.lastName,
          email: profileValue.email,
          socialRed: profileValue.socialRed,
          phone: profileValue.phone,
          imageUrl: profileValue.imageUrl
        }
      }
      // const res = await this.userService.profileUser(this.token.id).toPromise()
      // if (!res) throw new TypeError('res is undefined')
      this.token.id = this.profiles.unshift();
      const id = this.profileForm.value.id;
      const userId = this.profileForm.value.userId;
      const name = this.profileForm.value.name;
      const lastName = this.profileForm.value.lastName;
      const email = this.profileForm.value.email;
      const socialRed = this.profileForm.value.socialRed;
      const phone = this.profileForm.value.phone;
      const image = this.profileForm.value.ImageUrl;
      alert('Profile Update, thanks.')
    } catch (error) {
      console.error(error)
    }
  }

  // Function for send form
  onSubmit() {
    if (this.profileForm.valid) {

      this.patchProfile(this.profileForm.value)
      console.log('Good !! You deserve it for your effort ')

    } else {
      alert('Sorry!! An error occurred while updating the changes')
      console.warn(this.profileForm.value);
    }
  }
}