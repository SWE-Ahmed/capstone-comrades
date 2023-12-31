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
import { CardService } from './services/card.service' ;
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AccountInfoComponent } from './account-info/account-info.component';
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
import { ProjectPageComponent } from './project-page/project-page.component';
import { environment } from '../environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { SidebarContentComponent } from './sidebar/sidebar-content/sidebar-content.component';
import { SidebaritemComponent } from './sidebar/sidebaritem/sidebaritem.component';


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
    PastProjectCardComponent,
    ProjectPageComponent,
    SidebarComponent,
    MyTeamComponent,
    AdminSettingsComponent,
    SidebarContentComponent,
    SidebaritemComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
