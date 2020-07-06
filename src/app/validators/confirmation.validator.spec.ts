import { AbstractControl } from '@angular/forms';
import { confirmationValidator } from './confirmation.validator';
import { genControls } from './testUtilities';

describe('Confirmation Validator', () => {
  it('should return null if control has no value', () => {
    const [_1, control] = genControls(null, 'lastName', null);
    expect(confirmationValidator('lastName')(control)).toBeNull();
  });
  it('should return null if other control is not there', () => {
    const control = {
      value: 'something',
      parent: { controls: {} },
    } as unknown;
    expect(
      confirmationValidator('lastName')(control as AbstractControl)
    ).toBeNull();
  });
  it('should return null if both controls have the same value', () => {
    const [_1, control] = genControls('mypassword', 'lastName', 'mypassword');
    expect(confirmationValidator('lastName')(control)).toBeNull();
  });
  it('should return an error object if the values of the controls do not match', () => {
    const [_1, control] = genControls(
      'mypassword',
      'lastName',
      'myotherpassword'
    );
    expect(confirmationValidator('lastName')(control)).toEqual({
      confirmation: true,
    });
  });
});
