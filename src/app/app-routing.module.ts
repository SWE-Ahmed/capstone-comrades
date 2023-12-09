import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SignupSubmitComponent } from './signup-submit/signup-submit.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { 'path': '', 'component': HomeComponent },
  {
    'path': 'signin', 'component': SigninComponent,
},
  { 'path': 'profile', 'component': EditProfileComponent, 'canActivate': [authGuard]},
  { 'path': 'signup', 'component': SignupComponent },
  { 'path': 'signup/submit', 'component': SignupSubmitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
