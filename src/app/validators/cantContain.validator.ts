import { ValidatorFn, AbstractControl } from '@angular/forms';
// takes the name of a control that contains a value that is not allowed to be
// contained within this control's value
export function cantContainValidator(otherControlName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const otherControl = control.parent?.controls[otherControlName];

    if (!otherControl || !otherControl.value || !control.value) {
      return null;
    } else {
      const contained = control.value
        .toLowerCase()
        .includes(otherControl.value.toLowerCase());
      return contained ? { containsName: { value: otherControl.value } } : null;
    }
  };
}
