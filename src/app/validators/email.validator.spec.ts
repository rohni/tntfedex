import { AbstractControl } from '@angular/forms';
import { emailValidator } from './email.validator';

// This will just test the basics.  I could create a huge number of tests for
// email formats.  I just want to catch the obvious, and the ones that are too
// permissive.
describe('Email Validator', () => {
  it('should return null for name@name.suffix', () => {
    const control = { value: 'bubba@gump.com' } as AbstractControl;
    expect(emailValidator(control)).toBeNull();
  });
  it('should return null for name.name@name.suffix', () => {
    const control = { value: 'bubba.gump@gump.com' } as AbstractControl;
    expect(emailValidator(control)).toBeNull();
  });
  it('should return null for name-other@domain.suffix', () => {
    const control = { value: 'bubba-gump@gump.com' } as AbstractControl;
    expect(emailValidator(control)).toBeNull();
  });
  it('should return an error object for name@domain', () => {
    const control = { value: 'bubba@gump' } as AbstractControl;
    expect(emailValidator(control)).toEqual({ emailValidator: true });
  });
  it('should return an error object for a missing @', () => {
    const control = { value: 'bubba.gump' } as AbstractControl;
    expect(emailValidator(control)).toEqual({ emailValidator: true });
  });
});
