import { ValidatorFn, AbstractControl } from '@angular/forms';
// takes the name of the control that it is supposed to match, and checks that
// the two values are identical
export function confirmationValidator(otherControlName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const otherControl = control.parent?.controls[otherControlName];

    return !otherControl ||
      !control.value ||
      control.value == otherControl.value
      ? null
      : { confirmation: true };
  };
}
