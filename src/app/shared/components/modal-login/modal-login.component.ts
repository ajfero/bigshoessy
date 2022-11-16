// Angular Imports
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
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
  // Almacenamos el token para autenticaciones //
  user: any;
  // ReactiveForm -> loginForm //
  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private route: Router,
  ) {
    this.loginForm = this._buildForm()
    this.user = this.userService.getUser();
  }
  // Confirm logged and response data of user logged. //
  async dataLogin(loggerValue: any) {
    try {
      const logger: SigninPost = {
        email: loggerValue.email,
        password: loggerValue.password
      }
      // Get user token.
      const res = await this.authService.login(loggerValue.email, loggerValue.password).toPromise()
      if (!res) throw new TypeError('res is undefined');
      // Return error without match.
    } catch (error) {
      console.error(error);
    }
  }

  // Function send login //
  onSubmit() {
    if (this.loginForm.valid) {
      this.dataLogin(this.loginForm.value)
      console.log('Logged in process')
      this.route.navigate(['/products'])
      this.loginForm.reset();
    } else {
      console.log('Logged failed, please type data try again')
    }
    console.log('¡¡Welcome to the Big Shoes SY!! Enjoy your demurrage in our store')
  }
  // Params form : Hardcode an User for send data. //
  private _buildForm(): FormGroup {
    return this.fb.group({
      email: ['usuario@usuario.com', {}],
      password: ['AguilarDesert-23', {}],
    })
  }
}
// Get data user //
// const getUser = await this.authService.loginUser(loggerValue.email, loggerValue.password).toPromise()
// if (!getUser) throw new TypeError('getUser is undefined')
// this.user = (getUser.user.id);