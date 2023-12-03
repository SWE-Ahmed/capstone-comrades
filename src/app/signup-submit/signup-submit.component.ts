import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-submit',
  templateUrl: './signup-submit.component.html',
  styleUrls: ['./signup-submit.component.css']
})
export class SignupSubmitComponent {

  constructor(private router: Router) {
  }

  popup: boolean = false;

  closePopup(path: string): void {
    this.popup = false;
    this.router.navigate([path]);
  }
}
