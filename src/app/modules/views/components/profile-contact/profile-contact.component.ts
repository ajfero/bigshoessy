// Angular tools.
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ValidatorFn, Validator, Validators } from '@angular/forms';
import { mustMatch } from 'src/app/shared/validators';
// Service
import { UserService } from 'src/app/shared/services/user.service';
// Model
import { ProfileInformation } from '../../models/profile';
@Component({
  selector: 'app-profile-contact',
  templateUrl: './profile-contact.component.html',
  styleUrls: ['./profile-contact.component.scss']
})
export class ProfileContactComponent {

  // Data saved form
  profiles: ProfileInformation[] = [];
  // Form group
  profileForm = this.fb.group({
    userId: [''],
    name: ['', Validators.required],
    email: ['', Validators.required],
    lastName: [''],
    socialRed: [''],
    phone: [''],
    ImageUrl: ['']
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService // PUT data.
  ) {
    this.profileForm = this._buildForm() // Declared build form
  }
  // Validators form
  private _buildForm(): FormGroup {
    return this.fb.group({
      userId: '',
      name: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      lastName: [''],
      email: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      socialRed: [''],
      phone: [''],
      imageUrl: ['']
    })
  }
  // Value form === true : Value form !== false
  patchProfile(profileValue: any) {

    const profile: ProfileInformation = {
      userId: profileValue.userId,
      name: profileValue.email,
      lastName: profileValue.lastName,
      email: profileValue.email,
      socialRed: profileValue.socialRed,
      phone: profileValue.phone,
      imageUrl: profileValue.imageUrl
    }

    this.userService.ProfileTransit(profile)
      .subscribe({
        next: (res: any) => {
          console.log(res, '¡¡Update profile!!');
          this.profiles.unshift(profile);
          const userId = this.profileForm.value.userId;
          const name = this.profileForm.value.name;
          const lastName = this.profileForm.value.lastName;
          const email = this.profileForm.value.email;
          const socialRed = this.profileForm.value.socialRed;
          const phone = this.profileForm.value.phone;
          const image = this.profileForm.value.ImageUrl;
          alert('Profile Update, thanks.')
        },
        error: () => { }
      })
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
