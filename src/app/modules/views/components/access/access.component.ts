// Angular tools
import { Component, } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
// Service
import { UserService } from 'src/app/shared/services/user/user.service';
// Model
import { Access } from '../../models/access.model';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent {

  // Var`s
  acccesData: Access[] = []
  user: any;

  // ReactiveForm -> updateForm
  accessDataForm = this.fb.group({
    email: ['', Validators.required],
    oldPassword: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private UserService: UserService,) {
    this.user = this.UserService.getUser();
  }
}


// Data for completed. //

  // Update a message with contactForm data. //
  // updateUserAccess(userDataValue: any) {
  //   const userData: Access = {
  //     email: userDataValue.email,
  //     oldPassword: userDataValue.oldPassword,
  //     newPassword: userDataValue.newPassword,
  //     confirmPassword: userDataValue.confirmPassword,
  //   }

  //   this.UserService.updateDataUserAccess(userData)
  //     .subscribe({
  //       next: (resIter: any) => {
  //         console.log(resIter);
  //         this.acccesData.unshift(userData);
  //         const email = this.accessDataForm.value.email
  //         alert(`
  // Thanks a lot for update your access Data!! 	name: ${email}
  // 								`)
  //       },
  //       error: () => { }
  //     })

  // }

  // When the component detect an event click, validate the form and submit //
  //   onSubmitUpdateUserAccess() {

  //     if (this.accessDataForm.valid) {

  //       this.updateUserAccess(this.accessDataForm.value)
  //       this.accessDataForm.reset();
  //       console.log('contactForm Send')

  //     } else {
  //       console.log('Sorry!! we can`t send the contactForm ')
  //       this.accessDataForm.markAllAsTouched()
  //     }

  //     console.warn(this.accessDataForm.value);
  //   }

