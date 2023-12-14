import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  isLargeScreen: boolean = true;  // Default to true for larger screens

  constructor(private router: Router, private auth: AuthService,private breakpointObserver: BreakpointObserver) {}

  ngOnInit() { // Checks if the screen size is small or Xsmall and changes the boolean variable
    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe(result => {
      this.isLargeScreen = !result.matches;
    });
  }

  @ViewChild('passwordValue') PasswordInput!: ElementRef; // Password input

  showPass: boolean = false;
  showEye: boolean = false;

  togglePasswordVisibility(): void {
    
      this.showEye = !this.showEye;
      this.showPass = !this.showPass;
      this.PasswordInput.nativeElement.type = this.showPass
        ? 'text'
        : 'password';
    }


  launchProfile(email: string, password: string): void {
    this.auth.signIn(email, password)
  }
}
