import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomRegisterFormValidators } from './validators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  confirmPasswordError: boolean = false;
  formError: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          CustomRegisterFormValidators.passwordRegexValidator,
        ],
      ],
      confirm_password: ['', Validators.required],
    });
  }

  onSubmit() {
    const username = this.registerForm.value.username;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

    if (this.registerForm.value.confirm_password !== password) {
      this.confirmPasswordError = true;

      return;
    }

    this.authService.register(username, email, password).subscribe({
      next: (response) => {
        const token = response.access_token;
        this.authService.setToken(token);
        this.router.navigate(['dashboard']);
        //add login status
      },
      error: (error) => {
        console.log('register failed', error);
        this.formError = true;
      },
    });
  }
}
