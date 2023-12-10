import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'navbarheader',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarHeaderComponent{
  constructor( private cdref: ChangeDetectorRef ) {}   

  ngAfterContentChecked() {
    this.navList = this.auth.isAuthenticated() ? this.navIn : this.navOut;
    this.cdref.detectChanges();
  }

  auth = inject(AuthService);
  navList: any 
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
      name: 'USERNAME',
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
