import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  showChangePasswordButton = true;
  showEditButton = true;
  showCancelButton = false;
  showSubmitButton = false;

  isEditMode = false;

  onChangePassword() {
    // Change functionality.
  }

  onEdit() {
    this.moveToEditMode();
  }

  onSubmit() {
    // ToDo: Perform submit logic here
    // For now, just toggling the button visibility

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
}
