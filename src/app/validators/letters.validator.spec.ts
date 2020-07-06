import { AbstractControl } from '@angular/forms';
import {
  lowerLettersValidator,
  upperLettersValidator,
} from './letters.validator';

describe('Lower Letters Validator', () => {
  it('should return null if there are lower letters in the control value', () => {
    const control1 = { value: '2244untBBB' } as AbstractControl;
    expect(lowerLettersValidator(control1)).toBeNull();
    const control2 = { value: 'unt' } as AbstractControl;
    expect(lowerLettersValidator(control2)).toBeNull();
  });
  it('should return an error object if there are *no* lower letters in the control value', () => {
    const control1 = { value: '2244UNNTBBB' } as AbstractControl;
    expect(lowerLettersValidator(control1)).toEqual({
      missingLowerLetters: true,
    });
    const control2 = { value: '3333' } as AbstractControl;
    expect(lowerLettersValidator(control2)).toEqual({
      missingLowerLetters: true,
    });
  });
});

describe('Upper Letters Validator', () => {
  it('should return null if there are upper letters in the control value', () => {
    const control1 = { value: '2244untBBB' } as AbstractControl;
    expect(upperLettersValidator(control1)).toBeNull();
    const control2 = { value: 'UNT' } as AbstractControl;
    expect(upperLettersValidator(control2)).toBeNull();
  });
  it('should return an error object if there are *no* upper letters in the control value', () => {
    const control1 = { value: '2244unnntbbb' } as AbstractControl;
    expect(upperLettersValidator(control1)).toEqual({
      missingUpperLetters: true,
    });
    const control2 = { value: '3333' } as AbstractControl;
    expect(upperLettersValidator(control2)).toEqual({
      missingUpperLetters: true,
    });
  });
});
