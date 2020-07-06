import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'signup-success',
  template: `
    <header>Signup Success</header>
    <h1>
      Thank-you for signing up!
    </h1>
  `,
  styles: [
    `
      h1 {
        margin: 5rem auto;
        text-align: center;
        color: var(--secondary-text);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupSuccessComponent {
  constructor() {}
}
