import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ChangeDetectorRef } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { PopulateService } from 'src/app/populate.service';

@Component({
  selector: 'navbarheader',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarHeaderComponent{
  constructor(
    private cdref: ChangeDetectorRef,
    private auth: AuthService) {}

  ngAfterContentChecked() {
    const currentUser = this.auth.getCurrentUser();

    if (this.auth.isAuthenticated() && currentUser !== null && currentUser !== undefined) {
      const userName = currentUser.name;

      if (userName !== null && userName !== undefined) {
        this.navIn[1].name = JSON.parse(JSON.stringify(userName)).firstName;
        this.navList = this.navIn;
      } else {
        console.warn('User name is null or undefined.');
        // Handle the case when user name is null or undefined
      }
    } else {
      this.navList = this.navOut;
    }

    this.cdref.detectChanges();
  }


  navList: any;
  navOut: any = [
    {
      name: 'Home',
      path: '',
    },
    {
      name: 'Sign In',
      path: 'signin',
    },
    {
      name: 'Sign Up',
      path: 'signup',
    },
    {
      name: 'Past Projects',
      path: 'projects',
    },
    {
      name: 'About Us',
      path: 'aboutus',
    },
  ];
  navIn: any = [
    {
      name: 'Home',
      path: '',
    },
    {
      name: '',
      path: 'profile',
    },
    {
      name: 'Teams',
      path: 'teams',
    },
    {
      name: 'Students',
      path: 'students',
    },
    {
      name: 'Past Projects',
      path: 'projects',
    },
  ];
}
