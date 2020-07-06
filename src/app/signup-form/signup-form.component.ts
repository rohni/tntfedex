import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { cantContainValidator } from '../validators/cantContain.validator';
import { confirmationValidator } from '../validators/confirmation.validator';
import { emailValidator } from '../validators/email.validator';
import {
  lowerLettersValidator,
  upperLettersValidator,
} from '../validators/letters.validator';
import { Signup } from '../models/signup.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  _signup: Signup;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const passwordValidators = [
      Validators.required,
      Validators.minLength(8),
      lowerLettersValidator, // could use Validators.pattern, but error object is obscure
      upperLettersValidator,
      cantContainValidator('firstName'), // must not contain the first name
      cantContainValidator('lastName'), // must not contain the last name
    ];
    this.form = this.formBuilder.group({
      firstName: [
        this._signup && this._signup.firstName,
        [Validators.required],
      ],
      lastName: [this._signup && this._signup.lastName, [Validators.required]],
      email: [
        this._signup && this._signup.email,
        [Validators.required, emailValidator],
      ],
      password: [null, passwordValidators],
      passwordConfirm: [
        null,
        [...passwordValidators, confirmationValidator('password')],
      ],
    });
  }

  saveUser(): any {
    this.form.updateValueAndValidity();
    this.form.disable(); // stop multiple submits.  A spinner would be good here
    this.userService.postUser(this.form.value).subscribe((response) => {
      // redirect to the success or error page
      this.router.navigateByUrl(
        response.ok ? 'signup-success' : 'signup-error'
      );
    });
  }
}
