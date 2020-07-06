import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { SignupErrorComponent } from './signup-error/signup-error.component';

const routes: Routes = [
  { path: 'signup-form', component: SignupFormComponent },
  { path: '', redirectTo: '/signup-form', pathMatch: 'full' },
  { path: 'signup-success', component: SignupSuccessComponent },
  { path: 'signup-error', component: SignupErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
