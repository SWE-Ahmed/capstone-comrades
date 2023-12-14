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
export class NavbarHeaderComponent implements OnInit{
  private isAuthenticated: boolean = false;
  constructor(
    private cdref: ChangeDetectorRef,
    private auth: AuthService) {}
    ngOnInit() {
      this.auth.isAuthenticated().subscribe((isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
      });
    }

  ngAfterContentChecked() {
    const currentUser = this.auth.getCurrentUser();

    if (this.isAuthenticated && currentUser !== null && currentUser !== undefined) {
      this.userName = currentUser.name;
      this.signedIn = true

      if (this.userName !== null && this.userName !== undefined) {
        this.userName = currentUser.name.firstName;
        this.navList = this.navIn;
      } else {
        console.warn('User name is null or undefined.');
        // Handle the case when user name is null or undefined
      }
    } else {
      this.signedIn = false;
      this.navList = this.navOut;
    }

    this.cdref.detectChanges();
  }


  signedIn: boolean = false;
  userName: string = 'Sign In';
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

  // sign out the current user from the logout item in the navbar
  signOutNav(): void {
    this.auth.signOut();
  }
}
