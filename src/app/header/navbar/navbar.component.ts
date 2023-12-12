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
  constructor( private cdref: ChangeDetectorRef ) {}

  ngAfterContentChecked() {
    if (this.auth.isAuthenticated() && this.auth.getCurrentUser() !== null) {
      this.navIn[1].name = this.auth.getCurrentUser()?.name.get('firstName')
      this.navList = this.navIn
    }
    else {
      this.navList = this.navOut;
    }
    // this.navList = this.auth.isAuthenticated() ? this.navIn : this.navOut;
    this.cdref.detectChanges();
  }

  auth = inject(AuthService);
  data = inject(DataService);
  popul8 = inject(PopulateService);
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
