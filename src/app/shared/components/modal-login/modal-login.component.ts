// Angular Imports
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

// Service
import { AuthService } from 'src/app/modules/auth/services/auth.service';

// Models
import { SigninPost } from 'src/app/modules/auth/model/login.model';
import { Token } from '@angular/compiler';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent {
  // Almacenamos el token para autenticaciones
  token = '';
  // Almacenamos el ID para relaciones.
  id = '';

  // Init variables
  logins: SigninPost[] = [];

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
  dataLogin(loggerValue: any) {

    const logger: SigninPost = {
      email: loggerValue.email,
      password: loggerValue.password
    }
    this.authService.login(loggerValue.email, loggerValue.password)
      .subscribe({
        next: (res) => {
          this.token = res.token;
        },
        error: () => { }
      });
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



