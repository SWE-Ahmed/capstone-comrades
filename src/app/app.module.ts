import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupSubmitComponent } from './signup-submit/signup-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EditProfileComponent,
    AccountInfoComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    FooterComponent,
    SigninComponent,
    SignupSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
