import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { errorMessages } from '../../shared/error-messages';

@Component({
  selector: 'form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent implements OnInit {
  @Input() label: string;
  @Input() control: FormControl;
  errors$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.errors$ = this.control.statusChanges.pipe(
      map((data) =>
        this.control.pristine || !this.control.errors
          ? []
          : Object.entries(this.control.errors)
              .filter(([key, _obj]) => errorMessages[key])
              .map(([key, obj]) => errorMessages[key](obj))
      )
    );
  }
}
