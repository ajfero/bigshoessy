// Angular tools.
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
<<<<<<< Updated upstream
=======
import { mustMatch } from 'src/app/shared/validators';

>>>>>>> Stashed changes
// Service
import { UserService } from 'src/app/shared/services/user/user.service';
import { TokenService } from 'src/app/shared/services/token/token.service';
// Model
import { ProfileInformation } from '../../../../shared/models/profile';
import { InformationUser } from 'src/app/shared/models/user';
// Decode
import jwt_decode from 'jwt-decode';
import { InformationUser } from 'src/app/shared/models/user';
<<<<<<< Updated upstream
import { id } from 'date-fns/locale';
=======
import { Profile } from '../../models/profile';
>>>>>>> Stashed changes

@Component({
  selector: 'app-profile-contact',
  templateUrl: './profile-contact.component.html',
  styleUrls: ['./profile-contact.component.scss']
})
export class ProfileContactComponent {

<<<<<<< Updated upstream
  // Decode //
  token: any;

  // Data saved form //
  profiles: InformationUser[] = [];

  // Model for put profile response user data. //
  profileModel: InformationUser = {
=======
  // Data saved form
  profiles: Profile[] = [];

  // Form model
  profileModel: Profile = {
>>>>>>> Stashed changes
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
  };
<<<<<<< Updated upstream
  // Form //
=======

  // Form
>>>>>>> Stashed changes
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
  // Type status //

  // Type status
  statusDetail: 'loading' | 'sucess' | 'error' | 'init' = 'init';

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

  // Validators form //
  // Value form === true : Value form !== false
  // patchProfile(profileValue: any) {

  //   const profile: ProfileInformation = {
  //     id: profileValue.id,
  //     userId: profileValue.userId,
  //     name: profileValue.email,
  //     lastName: profileValue.lastName,
  //     email: profileValue.email,
  //     socialRed: profileValue.socialRed,
  //     phone: profileValue.phone,
  //     imageUrl: profileValue.imageUrl
  //   }
  //   this.userService.updateProfile(profile)
  //     .subscribe({
  //       next: (res: any) => {
  //         console.log(res, '¡¡Update profile!!');
  //         this.profiles.unshift(profile);
  //         const id = this.profileForm.value.id;
  //         const userId = this.profileForm.value.userId;
  //         const name = this.profileForm.value.name;
  //         const lastName = this.profileForm.value.lastName;
  //         const email = this.profileForm.value.email;
  //         const socialRed = this.profileForm.value.socialRed;
  //         const phone = this.profileForm.value.phone;
  //         const image = this.profileForm.value.ImageUrl;
  //         alert('Profile Update, thanks.')
  //       },
  //       error: () => { }
  //     })
  // }

  // Function for send form
  // onSubmit() {
  //   if (this.profileForm.valid) {

  //     this.patchProfile(this.profileForm.value)
  //     console.log('Good !! You deserve it for your effort ')

  //   } else {
  //     alert('Sorry!! An error occurred while updating the changes')
  //     console.warn(this.profileForm.value);
  //   }
  // }

  // Validators form
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  // Value form ? true : false //
  async patchProfile(profileValue: any) {
    try {
      const profile: ProfileInformation = {
        id: profileValue.id,
        userId: profileValue.userId,
        name: profileValue.email,
        lastName: profileValue.lastName,
        email: profileValue.email,
        socialRed: profileValue.socialRed,
        phone: profileValue.phone,
        imageUrl: profileValue.imageUrl
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
  // Function for send form //
  onSubmit() {
    if (this.profileForm.valid) {

      this.patchProfile(this.profileForm.value)
      console.log('Good !! You deserve it for your effort ')

    } else {
      alert('Sorry!! An error occurred while updating the changes')
      console.warn(this.profileForm.value);
    }
  }
=======
>>>>>>> Stashed changes
}