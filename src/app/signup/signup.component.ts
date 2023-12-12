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
  };
  // proceed to next form in the signup page
  nextForm(): void {
    this.params.accountType = document.querySelectorAll(
      '#dropdownMenuButton'
    )[0].textContent;

    // this function will check the information in the first layer
    let status = this.checkInfo(this.params);
    // TODO: impiliment the code that will show an error message for the user to tell him what is the problem with the form and ask him to fix it.
    console.log(status);
    if (status == 0) {
      this.params.showFirst = false;
    }
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

  checkInfo(params: any) {
    if (params.firstName.length == 0) {
      // code 1 means the first name is empty
      return 1;
    } else if (params.lastName.length == 0) {
      // code 2 means the last name is empty
      return 2;
    } else if (
      !params.email.endsWith('@kfupm.edu.sa') ||
      params.email.length <= 13
    ) {
      // code 3 means

      return 3;
    } else if (
      params.phoneNumber.length != 10 ||
      !params.phoneNumber.startsWith('05')
    ) {
      // code 4 means there is an error with the phone number
      return 4;
    }

    // 0 mean there is no issue with the information
    return 0;
  }
}
