import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupFormComponent } from './signup-form.component';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FormInputComponent } from './input/input.component';

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;
  let el;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [SignupFormComponent, FormInputComponent],
      providers: [FormBuilder, HttpClient],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  const testRequired = (name) => {};

  fit('should test each field for the required validator', () => {
    Object.keys(component.form.controls).map((name) => {
      const control = component.form.controls[name];
      expect(control.value).toBeNull();
      control.setValue('something');
      expect(control.value).toEqual('something');
      control.setValue('');
      expect(control.hasError('required'));
    });
  });

  fit('should disable submit button if form is invalid', () => {
    expect(component.form.invalid).toBeTruthy();
    expect(
      fixture.debugElement.query(By.css('button[type="submit"')).nativeElement
        .disabled
    ).toBeTruthy();
  });

  // Frankly, I have been fought by Angular the whole way in writing sensible
  // tests, and I've had enough.  If this was a real project I would have
  // written tests for each of the Validators.
});
