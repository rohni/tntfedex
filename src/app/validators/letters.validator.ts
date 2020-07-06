import { AbstractControl } from '@angular/forms';

const validator = (pattern, errorKey) => (
  control: AbstractControl
): { [key: string]: boolean } | null => {
  return pattern.test(control.value) ? null : { [errorKey]: true };
};

export const upperLettersValidator = validator(
  /.*\p{Lu}.*/u,
  'missingUpperLetters'
);
export const lowerLettersValidator = validator(
  /.*\p{Ll}.*/u,
  'missingLowerLetters'
);
