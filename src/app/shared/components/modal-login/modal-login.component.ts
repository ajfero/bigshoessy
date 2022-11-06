import { Component } from '@angular/core';
import { LoginService } from 'src/app/modules/auth/services/login.service';
// Angular Imports
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  //
  isLoading: boolean = false
  //
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,)
  //
  {
    this.loginForm = this._buildForm()
  }
  // login guardarmos el user para enviarlo.
  private _buildForm(): FormGroup {
    return this.fb.group({
      email: ['admin@admin.com', { nonNullable: true, validators: [Validators.required, Validators.email] },],
      password: ['admin1234', { nonNullable: true, validators: [Validators.required] }],
    })
  }
  login() {
    this.loginService.login('admin@admin.com', 'admin1234')
      .subscribe(res => {
        console.log('¡¡Great!! Data match in database...');
      })
  }
}



