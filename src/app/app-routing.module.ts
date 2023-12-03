import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SignupSubmitComponent } from './signup-submit/signup-submit.component';

const routes: Routes = [
  {'path':'home-view', 'component':HomeComponent},
  {'path':'signin-view', 'component': SigninComponent},
  {'path': 'signup-view', 'component':SignupComponent},
  {'path': 'signup-view/submit', 'component':SignupSubmitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
