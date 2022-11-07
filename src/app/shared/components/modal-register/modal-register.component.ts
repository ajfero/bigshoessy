// Angular tools
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { SignupPost } from 'src/app/modules/auth/model/login.model';
import { mustMatch } from '../../validators';
// Service
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss']
})
export class ModalRegisterComponent {

  register: SignupPost[] = [];
  // ReactiveForm ->
  registerForm: FormGroup<{
    name: FormControl<string>
    email: FormControl<string>
    password: FormControl<string>
    confirmPassword: FormControl<string>
  }>
  // Service and tools
  constructor(
    private fb: FormBuilder,
    private userService: UserService
  )
  // init reactive/form
  {
    this.registerForm = this._buildForm()
  }
  // Params form
  private _buildForm(): FormGroup {
    return this.fb.group({
      email: ['', { nonNullable: true, validators: [Validators.required, Validators.email] },],
      name: ['', { nonNullable: true, validators: [Validators.required] }],
      password: ['', { nonNullable: true, validators: [Validators.required] }],
      confirmPassword: ['', { nonNullable: true, validators: [Validators.required] }],
    },
      {
        validators: mustMatch('password', 'confirmPassword'),
      })
  }

  //value.true === function create form
  createUser(registerValue: any) {

    const register: SignupPost = {
      name: registerValue.name,
      email: registerValue.email,
      password: registerValue.password,
      confirmPassword: registerValue.confirmPassword
    }

    this.userService.create(register)
      .subscribe({
        next: (res: any) => {
          console.log(res, '¡¡Your user account has been successfully created!!');
          this.register.unshift(register);
          const name = this.registerForm.value.name;
          const email = this.registerForm.value.email;
          const password = this.registerForm.value.password;
          const confirmPassword = this.registerForm.value.confirmPassword;
          alert(`
Thanks a lot for register!! 	username: ${name}
								`)
        },
        error: () => { }
      })
  }

  // Send register in data base.
  onSubmit() {

    if (this.registerForm.valid) {

      this.createUser(this.registerForm.value)

      this.registerForm.reset();

      console.log('contactForm Send')

    } else {
      console.log('Sorry!! your register failed, try again')
      this.registerForm.markAllAsTouched()
    }

    console.warn(this.registerForm.value);
  }

  // Required min lenght.
  get f() {
    return this.registerForm.controls;
  }
}

