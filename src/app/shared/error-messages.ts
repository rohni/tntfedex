// I hate enums in type/javascript, they are very broken so just using a POJO
// This should

// The reason for the functions is it allows the error object to be passed in to
// in case it has information that is relevant to creating the message as is the
// case with the last entry.

export const errorMessages = {
  required: () => 'Required field',
  emailValidator: () => 'Invalid email format',
  missingLowerLetters: () => 'Must have at least one LOWER case letter',
  missingUpperLetters: () => 'Must have at least one UPPER case letter',
  confirmation: () => 'Passwords must match',
  containsName: () => 'Must not contain your name(s)',
  minlength: (err) => `Must contain at least ${err.requiredLength} characters`,
};
