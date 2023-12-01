import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './header/navbar/navbar.component';
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
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

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
    NavbarComponent,
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
    FooterComponent
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
