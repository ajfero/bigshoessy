// Angular tools.
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
// Service
import { UserService } from 'src/app/shared/services/user/user.service';
// Model
import { ProfileInformation } from '../../../../shared/models/profile';
import { TokenService } from 'src/app/shared/services/token/token.service';
// Decode
import jwt_decode from 'jwt-decode';
import { InformationUser } from 'src/app/shared/models/user';
import { id } from 'date-fns/locale';

@Component({
  selector: 'app-profile-contact',
  templateUrl: './profile-contact.component.html',
  styleUrls: ['./profile-contact.component.scss']
})
export class ProfileContactComponent implements OnInit {

  // Decode //
  token: any;

  ider: any;
  // Subscribe data profile`s //
  userProfiles: InformationUser[] = [];

  // Data saved form //
  profiles: ProfileInformation[] = [];

  // Form model //
  profileModel: InformationUser = {
    id: '',
    profile: {
      id: '',
      userId: '',
      name: '',
      email: '',
      lastName: '',
      socialRed: '',
      phone: 0,
      imageUrl: '',
    }
  };
  // Form //
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
  statusDetail: 'loading' | 'sucess' | 'error' | 'init' = 'init';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,  // PUT data.
    private tokenService: TokenService
  ) {
    this.profileForm = this._buildForm() // Declared build form
    this.token = this.tokenService.getToken();
    this.ider = this.userService.getUser();
    // Decode token for get user.ID. //
    if (this.token) {
      this.token = jwt_decode(this.token)
    } else {

    }
  }



  // onShowProfile(id: string) {
  //   this.statusDetail = 'loading';
  //   this.userService.profileUser(this.ider.profile)
  //     .subscribe(data => {
  //       //Product Date
  //       this.profileModel = data;
  //       console.log(data);
  //       this.statusDetail = 'sucess';
  //     }, response => {
  //       console.log(response.error.message);
  //       this.statusDetail = 'error';
  //     })
  // }
  async ngOnInit() {
    let headers = new Headers({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'Content-type': 'application/json',
    })
    this.userService.profileUser(this.token.id)
      .subscribe(res => {
        this.profileModel = res;
        console.log(this.profileModel)
      });
  }


  // Validators form //
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
      // const res = await this.authService.getProfiles(profile).toPromise()
      // if (!res) throw new TypeError('res is undefined')
      this.token.id = this.profiles.unshift(profile);
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
}