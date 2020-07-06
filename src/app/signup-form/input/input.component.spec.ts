import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: FormInputComponent;
  let fixture: ComponentFixture<FormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputComponent);
    console.log(fixture);
    // fixture.componentInstance.control =
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // I have spent too much time on this already.  The Validators are all tested,
  // and I would add here tests for each of the error objects to ensure that
  // they are behaving properly.
});
