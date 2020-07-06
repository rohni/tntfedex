# Tntfedex

Implements a signup form, that follows various rules of validation.

I stuck to a simple layout, as it is clear and handles various screen formats
without having to get all complicated with media queries. Anyway, when working
for large companies they already have people with real skills doing visual
designs. :-)

### Validation notes

The validation error messages esp. with password take some space and make things
shift. I thought about this, but feel that the immediate feedback is more
important so the user knows exactly what is expected. I've had password fields
with crazy rules that I have had to go into the code and figure out because I
was just being told something was wrong but not what the rules were. Highly
annoying, and had I not been a developer I would never have managed to create a
valid password.

### Testing

The tests are far from complete. Validators are tested.
signup-form is not fully tested, but I just got sick of Angular's test framework
fighting me the whole time, and I've spent more than enough time on this project.

e2e also managed to make simple things difficult, so only the happy flow is
tested. In a real application this would have the top level branches tested.

## Next steps

- finish the tests
- Add multilingual support
- Finish signup procedure. i.e. send an email with a deep link to verify the account.
- Add oAuth

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
