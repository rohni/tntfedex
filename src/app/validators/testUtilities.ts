import { AbstractControl } from '@angular/forms';

export const genControls = (value, otherName, otherValue) => {
  const otherControl = { value: otherValue } as AbstractControl;
  const control = {
    value,
    parent: {
      controls: { [otherName]: otherControl },
    },
  } as unknown;
  return [otherControl, control as AbstractControl];
};
