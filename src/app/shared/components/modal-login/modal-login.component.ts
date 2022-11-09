// Angular Imports
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

// Service
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { UserService } from '../../services/user/user.service';

// Models
import { SigninPost } from 'src/app/shared/models/login.model';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent {
  // Almacenamos el token para autenticaciones
  token = '';

  // ReactiveForm -> loginForm
  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.loginForm = this._buildForm()
  }

  // dataUser with loginForm data.
  async dataLogin(loggerValue: any) {
    try {
      const logger: SigninPost = {
        email: loggerValue.email,
        password: loggerValue.password
      }
      const res = await this.authService.login(loggerValue.email, loggerValue.password).toPromise()
      if (!res) throw new TypeError('res is undefined')
      // if (!res.token) throw new TypeError('token is undefined')
      this.token = res.token;
      console.log(this.token) //callbackhack
    } catch (error) {
      console.error(error);
    }
  }
  Profile() {
    this.authService.getProfile(this.token)
      .subscribe(profile => {
        console.log(profile);
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
    console.log('¡¡Welcome to the Big Shoes SY!! Enjoy your demurrage in our store')
  }

  // Params form : Hardcode an User for send data.
  private _buildForm(): FormGroup {
    return this.fb.group({
      email: ['ing.ajfernandez@gmail.com', {}],
      password: ['AguilarDesert-23', {}],
    })
  }

}



