import { Component, OnInit, Input } from '@angular/core';

// I have inlined the template and styles because there is almost nothing there.
@Component({
  selector: 'header',
  template: `
    <div class="header">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .header {
        display: flex;
        width: 100%;
        background-color: var(--primary-color);
        color: var(--primary-text);
        padding: 1.5rem;
        font-size: 1.5rem;
        margin: 0;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
