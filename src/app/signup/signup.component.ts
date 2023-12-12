import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private router: Router) {}
  // params acts as the dictionary of data passed in the signup form
  params: any = {
    showFirst: true,
    firstName: '',
    lastName: '',
    accountType: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };
  // proceed to next form in the signup page
  nextForm(): void {
    this.params.accountType = document.querySelectorAll(
      '#dropdownMenuButton'
    )[0].textContent?.trim();
    this.params.showFirst = false;
  }
  // change the account type based on the one chosen by the user
  changeAccountType(accountType: string) {
    document.querySelectorAll('#dropdownMenuButton')[0].textContent =
      accountType;
  }
  // show or hide the first page of the signup form
  updateView(update: boolean) {
    this.params.showFirst = update;
  }
}
