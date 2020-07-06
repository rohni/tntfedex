import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormInputComponent } from './signup-form/input/input.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { SignupErrorComponent } from './signup-error/signup-error.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    FormInputComponent,
    HeaderComponent,
    SignupSuccessComponent,
    SignupErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
