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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
