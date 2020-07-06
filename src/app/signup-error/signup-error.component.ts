import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'signup-error',
  template: `
    <header>Signup Error</header>
    <h1>
      Oops! Something went wrong in processing your request
    </h1>
    <p>
      We have logged the incident and will be doing our best to fix this as soon
      as possible.
    </p>
    <p>
      If you are feeling brave you could try
      <a [routerLink]="['/']">signing up again. </a>
    </p>
  `,
  styles: [
    `
      h1 {
        margin: 5rem auto;
        text-align: center;
        color: var(--secondary-text);
      }
      p {
        text-align: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupErrorComponent {
  constructor() {}
}
