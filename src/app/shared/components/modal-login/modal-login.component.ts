// Angular Imports
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
// Service
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
// Models
import { SigninPost } from 'src/app/shared/models/login.model';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent {
  // Almacenamos el token para autenticaciones //
  token: any;

  // ReactiveForm -> loginForm //
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
  // Confirm logged and response data of user logged. //
  async dataLogin(loggerValue: any) {
    try {
      const logger: SigninPost = {
        email: loggerValue.email,
        password: loggerValue.password
      }
      const res = await this.authService.login(loggerValue.email, loggerValue.password).toPromise()
      if (!res) throw new TypeError('res is undefined')
      // if (!res.token) throw new TypeError('token is undefined')
      this.token = jwt_decode(res.token);
    } catch (error) {
      console.error(error);
    }
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
      email: ['usuario@usuario.com', {}],
      password: ['AguilarDesert-23', {}],
    })
  }
}