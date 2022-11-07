// Angular Imports
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

// Service
import { LoginService } from 'src/app/modules/auth/services/login.service';

// Models
import { SigninPost } from 'src/app/modules/auth/model/login.model';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent {

  // Init variables
  logins: SigninPost[] = [];

  // ReactiveForm -> loginForm
  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = this._buildForm()
  }

  // dataUser with loginForm data.
  dataLogin(loggerValue: any) {

    const logger: SigninPost = {
      email: loggerValue.email,
      password: loggerValue.password
    }

    this.loginService.login(logger)
      .subscribe({
        next: (res: any) => {
          console.log(res, '¡¡Great!! Data match in database...');
          this.logins.unshift(logger);
          const email = this.loginForm.value.email;
          const password = this.loginForm.value.password;
        },
        error: () => { }
      })
  }

  // Function send login
  onSubmit() {
    if (this.loginForm.valid) {
      this.dataLogin(this.loginForm.value)
      this.loginForm.reset();
      console.log('Logged in process')

    } else {
      console.log('Logged failed, please type data try again')
    }
    console.warn('¡¡Welcome to the Big Shoes SY!! Enjoy your demurrage in our store')
  }

  // Params form : Hardcode an User for send data.
  private _buildForm(): FormGroup {
    return this.fb.group({
      email: ['ing.ajfernandez@gmail.com', {}],
      password: ['AguilarDesert-23', {}],
    })
  }

}



