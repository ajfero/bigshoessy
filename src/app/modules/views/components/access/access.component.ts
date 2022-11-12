// Angular tools
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, Validators, FormGroup } from '@angular/forms';

// Service
import { UserService } from 'src/app/shared/services/user/user.service';

// Model
import { Access } from '../../models/access.model';
import { Profile } from '../../models/profile';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {

  // Init variables
  acccesData: Access[] = []
  profileData: Profile[] = []
  token = ''
  id = ''

  // ReactiveForm -> updateForm
  accessDataForm = this.fb.group({

    email: ['', Validators.required],
    oldPassword: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required]

  });

  // Constructor of Service and tools
  constructor(

    private fb: FormBuilder,
    private UserService: UserService,

  ) {
    // this.accessDataFormForm = this._buildForm()
  }

  ngOnInit(): void {
  }
  // 
  getUserProfile(profileValue: any) {

    const profile: Profile = {
      name: profileValue.name,
      lastname: profileValue.lastname,
      phone: profileValue.phone,
      imageUrl: profileValue.imageUrl,
      socialRed: profileValue.socialRed,
    }
    this.UserService.getProfile(token: string, id: string)
  }

  // When the component detect an event click, validate the form and submit
  onSubmit() {
    if (this.contactForm.valid) {

      this.createNewMessage(this.contactForm.value)
      this.contactForm.reset();
      console.log('contactForm Send')

    } else {
      console.log('Sorry!! we can`t send the contactForm ')
      this.contactForm.markAllAsTouched()
    }

    console.warn(this.contactForm.value);
  }


  // Update a message with contactForm data.
  //   updateUserAccess(userDataValue: any) {
  //     const userData: Access = {
  //       email: userDataValue.email,
  //       oldPassword: userDataValue.oldPassword,
  //       newPassword: userDataValue.newPassword,
  //       confirmPassword: userDataValue.confirmPassword,
  //     }

  //     this.UserService.updateDataUserAccess(userData)
  //       .subscribe({
  //         next: (resIter: any) => {
  //           console.log(resIter);
  //           this.acccesData.unshift(userData);
  //           const email = this.accessDataForm.value.email
  //           alert(`
  // Thanks a lot for update your access Data!! 	name: ${email}
  // 								`)
  //         },
  //         error: () => { }
  //       })

  //   }

  // When the component detect an event click, validate the form and submit
  // onSubmitUpdateUserAccess() {

  //   if (this.accessDataForm.valid) {

  //     this.updateUserAccess(this.accessDataForm.value)
  //     this.accessDataForm.reset();
  //     console.log('contactForm Send')

  //   } else {
  //     console.log('Sorry!! we can`t send the contactForm ')
  //     this.accessDataForm.markAllAsTouched()
  //   }

  //   console.warn(this.accessDataForm.value);
  // }

}