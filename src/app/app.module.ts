import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './header/searchbar/searchbar.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentCardComponent } from './student-view/student-card/student-card.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { TeamCardComponent } from './team-view/team-card/team-card.component';
import { RouterModule, Routes } from '@angular/router';
import { CardService } from './services/card.service' ;
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarHeaderComponent } from './header/navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupSubmitComponent } from './signup-submit/signup-submit.component';
import { ShowRequestsComponent } from './show-requests/show-requests.component';
import { RequestCardComponent } from './show-requests/request-card/request-card.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { PastProjectsViewComponent } from './past-projects-view/past-projects-view.component';
import { PastProjectCardComponent } from './past-projects-view/past-project-card/past-project-card.component';

//routes
const routes: Routes = [
  {path:'students', component: StudentViewComponent},
  {path:'teams', component: TeamViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarHeaderComponent,
    SearchbarComponent,
    StudentViewComponent,
    StudentCardComponent,
    TeamViewComponent,
    TeamCardComponent,
    ProfileComponent,
    EditProfileComponent,
    AccountInfoComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    FooterComponent,
    SigninComponent,
    SignupSubmitComponent,
    ShowRequestsComponent,
    RequestCardComponent,
    PopUpComponent,
    RequestFormComponent,
    PastProjectsViewComponent,
    PastProjectCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
