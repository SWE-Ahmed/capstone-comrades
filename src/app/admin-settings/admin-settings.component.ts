import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent {
  @ViewChild('usernameInput') usernameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  fieldStates: { [key: string]: boolean } = {
    username: true,
    email: true,
    password: true
  };
  showEye: boolean = false;
  showPassword: boolean = false;

  toggleEdit(field: string): void {
    this.fieldStates[field] = !this.fieldStates[field];
    this.focusInput(field);
  }
  // currently focus not working
  private focusInput(field: string): void {
    switch (field) {
      case 'username':
        this.usernameInput.nativeElement.focus();
        break;
      case 'email':
        this.emailInput.nativeElement.focus();
        break;
      case 'password':
        this.passwordInput.nativeElement.focus();
        this.showEye = !this.showEye;
        this.passwordInput.nativeElement.type = this.showEye ? this.passwordInput.nativeElement.type : 'password';
        break;
    }
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    this.passwordInput.nativeElement.type = this.showPassword ? 'text' : 'password';
  }
}
