import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomRegisterFormValidators {
  static passwordRegexValidator(
    control: AbstractControl,
  ): ValidationErrors | null {
    const password = control.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      return { invalidPassword: true };
    }
    return null;
  }
}
