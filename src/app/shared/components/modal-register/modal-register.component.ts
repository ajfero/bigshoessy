// Angular tools
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
// Shared
import { mustMatch } from '../../validators';
// Service
import { UserService } from 'src/app/shared/services/user.service';
import { User, createUserDTO } from '../../models/user';
@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss']
})
export class ModalRegisterComponent {
  // ReactiveForm ->

  constructor(
    private userService: UserService,
  ) {

  }


  createUser() {
    this.userService.create({
      name: 'tomascapo',
      email: 'tomascapo@gmail.com',
      password: 'admin123',
    })
      .subscribe(rta => {
        console.log(rta);
      })
  }

}

