import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ShowRequestsComponent } from './show-requests/show-requests.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { PastProjectsViewComponent } from './past-projects-view/past-projects-view.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { authGuard } from './auth.guard';
import { SignupSubmitComponent } from './signup-submit/signup-submit.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebaritemComponent } from './sidebar/sidebaritem/sidebaritem.component';
import { SidebarContentComponent } from './sidebar/sidebar-content/sidebar-content.component';

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
    path: 'signup/submit',
    component: SignupSubmitComponent,
  },
  {
    path: 'show-requests',
    component: ShowRequestsComponent,
  },
  {
    path: 'request-form',
    component: RequestFormComponent,
  },
  { path: 'projects', component: PastProjectsViewComponent },
  { path: 'projects/:projectId', component: ProjectPageComponent },
  {
    path: 'students',
    component: StudentViewComponent,
  },
  {
    path: 'teams',
    component: TeamViewComponent,
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
    children: [{
      path: '',
      component: SidebarContentComponent,
    },
    {
      path: 'terms',
      component: SidebaritemComponent,
    },
    {
      path: 'students',
      component: SidebaritemComponent,
    },
    {
      path: 'mentors',
      component: SidebaritemComponent,
    },
    {
      path: 'timeline',
      component: SidebaritemComponent,
    },
    {
      path: 'announcements',
      component: SidebaritemComponent,
    },
    {
      path: 'reports',
      component: SidebaritemComponent,
    },
    {
      path: 'termSettings',
      component: SidebaritemComponent,
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
