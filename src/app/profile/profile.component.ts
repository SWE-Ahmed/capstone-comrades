import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private auth: AuthService, private data: DataService) {}
  ngOnInit(): void {
    // populate the edit-profile view with the current user data
    let currentUser = this.auth.getCurrentUser()
    this.params = currentUser
    this.params.firstName = currentUser?.name.firstName
    this.params.lastName = currentUser?.name.lastName
  }
  showChangePasswordButton = true;
  showEditButton = true;
  showCancelButton = false;
  showSubmitButton = false;
  isEditMode = false;
  params: any = {
    firstName: '',
    lastName: '',
    major: '',
    phoneNumber: '',
    email: '',
    specialization: '',
    about: '',
    skills: '',
    links: '',
  };

  onChangePassword() {
    // Change functionality.
  }

  onEdit() {
    this.moveToEditMode();
  }

  onSubmit() {
    // ToDo: Perform submit logic here
    this.data.editProfileRemote(this.params, this.auth.getCurrentUser())
    this.exitEditMode();
  }

  onCancel() {
    // ToDo: Handle cancel logic here
    // For now, just toggling the button visibility
    this.exitEditMode();
  }

  moveToEditMode() {
    this.isEditMode = true;

    this.showChangePasswordButton = false;
    this.showEditButton = false;
    this.showCancelButton = true;
    this.showSubmitButton = true;
  }

  exitEditMode() {
    this.isEditMode = false;

    this.showChangePasswordButton = true;
    this.showEditButton = true;
    this.showCancelButton = false;
    this.showSubmitButton = false;
  }

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
      this.newPasswordInput.nativeElement.type = this.showPasswordNewPass
        ? 'text'
        : 'password';
    } else if (inputType === 'confirmPass') {
      this.showEyeConfirmPass = !this.showEyeConfirmPass;
      this.showPasswordConfirmPass = !this.showPasswordConfirmPass;
      this.confirmPassInput.nativeElement.type = this.showPasswordConfirmPass
        ? 'text'
        : 'password';
    }
  }
}
