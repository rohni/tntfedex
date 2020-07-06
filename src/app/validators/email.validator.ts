import { AbstractControl } from '@angular/forms';

// Unfortunately the built-in angular email Validator follows the rfc strictly,
// which makes it too permissive to be of much use. e.g. name@domain (with no
// domain suffix) is allowed amongst other things.
// the regexp below is much more narrow, and conforms with what we expect from
// an email.
export const emailValidator = (
  control: AbstractControl
): { [key: string]: any } | null => {
  // regex source: https://emailregex.com/
  // tslint:disable-next-line: max-line-length
  const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return EMAIL_REGEXP.test(control.value) ? null : { emailValidator: true };
};
