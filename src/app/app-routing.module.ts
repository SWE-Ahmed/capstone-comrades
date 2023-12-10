import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { authGuard } from './auth.guard';
import { TeamViewComponent } from './team-view/team-view.component';
import { StudentViewComponent } from './student-view/student-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'profile',
    component: EditProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'teams',
    component: TeamViewComponent,
  },
  {
    path: 'students',
    component: StudentViewComponent,
  },
  {
    path: 'pastprojects',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
