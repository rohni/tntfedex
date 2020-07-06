import { AbstractControl } from '@angular/forms';
import { cantContainValidator } from './cantContain.validator';
import { genControls } from './testUtilities';

describe('cantContainValidator', () => {
  it("should return null if other control's  value is not in the value", () => {
    const [other, control] = genControls('rohan', 'firstName', 'abcdefgh');
    expect(cantContainValidator('firstName')(control)).toBeNull();
  });
  it('should return null if no other control', () => {
    const control = {
      value: 'whatever',
      parent: { controls: {} },
    } as AbstractControl;
    expect(cantContainValidator('firstName')(control)).toBeNull();
  });
  it('should be null if test control has no value', () => {
    const [_1, control1] = genControls('something', 'lastName', null);
    expect(cantContainValidator('lastName')(control1)).toBeNull();
    const [_2, control2] = genControls('something', 'lastName', '');
    expect(cantContainValidator('lastName')(control2)).toBeNull();
  });
  it("should return an error object if other control's  value *is* in the value", () => {
    const [other, control] = genControls('abcrohandef', 'firstName', 'rohan');
    expect(cantContainValidator('firstName')(control)).toEqual({
      containsName: { value: other.value },
    });
  });
});
