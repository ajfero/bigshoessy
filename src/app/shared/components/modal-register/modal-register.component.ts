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

  // Init variables
  registers: SignupPost[] = [];

  // ReactiveForm -> RegisterForm
  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  // Constructor of Service and tools
  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.registerForm = this._buildForm() // init -> build_form
  }
  // Create a User with registerForm data.
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
          this.registers.unshift(register);
          const name = this.registerForm.value.name;
          const email = this.registerForm.value.email;
          const password = this.registerForm.value.password;
          const confirmPassword = this.registerForm.value.confirmPassword;
          alert(`
Thanks a lot for register!!
  user: ${name}
  email: ${email}
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
      console.log('registerForm Send')

    } else {
      console.log('Sorry!! your register failed, try again')
      this.registerForm.markAllAsTouched()
    }

    console.warn(this.registerForm.value);

  }

  // Params form
  private _buildForm(): FormGroup {

    return this.fb.group({
      name: ['', { nonNullable: true, validators: [Validators.compose([Validators.required, Validators.minLength(6)])] }],
      email: ['', { nonNullable: true, validators: [Validators.compose([Validators.required, Validators.minLength(6)])] },],
      password: ['', { nonNullable: true, validators: [Validators.compose([Validators.required, Validators.minLength(6)])] }],
      confirmPassword: ['', { nonNullable: true, validators: [Validators.compose([Validators.required, Validators.minLength(6)])] }],
    },
      {
        validators: mustMatch('password', 'confirmPassword'),
      })

  }

  // Required min lenght.
  get f() {
    return this.registerForm.controls;
  }

}

// ReactiveForm -> registerForm
// registerForm: FormGroup<{
//   name: FormControl<string>
//   email: FormControl<string>
//   password: FormControl<string>
//   confirmPassword: FormControl<string>
// }>