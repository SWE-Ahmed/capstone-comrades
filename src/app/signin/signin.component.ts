import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private router: Router, private auth: AuthService) {
  }

  launchProfile(email: string, password: string): void {
    this.auth.signIn(email, password)
  }
}
