// Angular tools
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
// Shared
import { mustMatch } from '../../validators';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss']
})
export class ModalRegisterComponent {
  // ReactiveForm ->
  registerForm: FormGroup<{
    name: FormControl<string>
    email: FormControl<string>
    password: FormControl<string>
    confirmPassword: FormControl<string>
  }>

  constructor(
    private _fb: FormBuilder,
    private _router: Router,

  ) {
    this.registerForm = this._buildForm()
  }




  // Complete the form
  private _buildForm(): FormGroup {
    return this._fb.group(
      {
        name: ['', { nonNullable: true, validators: [Validators.required] }],
        email: ['', { nonNullable: true, validators: [Validators.required, Validators.email] }],
        password: ['', { nonNullable: true, validators: [Validators.required] }],
        confirmPassword: ['', { nonNullable: true, validators: [Validators.required] }],
      },
      {
        validators: mustMatch('password', 'confirmPassword'),
      }
    )
  }
}

