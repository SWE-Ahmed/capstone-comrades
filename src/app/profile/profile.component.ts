import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @ViewChild('newpass') newPasswordInput!: ElementRef;
  @ViewChild('confirmPass') confirmPassInput!: ElementRef;

  showEyeNewPass: boolean = false;
  showEyeConfirmPass: boolean = false;
  showPasswordNewPass: boolean = false;
  showPasswordConfirmPass: boolean = false;

  togglePasswordVisibility(inputType: 'newpass' | 'confirmPass'): void {
    if (inputType === 'newpass') {
      this.showEyeNewPass = !this.showEyeNewPass;
      this.showPasswordNewPass = !this.showPasswordNewPass;
      this.newPasswordInput.nativeElement.type = this.showPasswordNewPass ? 'text' : 'password';
    } else if (inputType === 'confirmPass') {
      this.showEyeConfirmPass = !this.showEyeConfirmPass;
      this.showPasswordConfirmPass = !this.showPasswordConfirmPass;
      this.confirmPassInput.nativeElement.type = this.showPasswordConfirmPass ? 'text' : 'password';
    }
  }
}