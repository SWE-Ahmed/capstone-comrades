import { Component } from '@angular/core';
 
@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
})
export class AccountInfoComponent {
  profileImageUrl: string = '../assets/user-green.png';
 
  onImageClick() {
    // Trigger the file input when the image is clicked
    const fileInput = document.getElementById(
      'profileImage'
    ) as HTMLInputElement;
    fileInput.click();
  }
 
  onImageSelected(event: any) {
    const fileInput = event.target as HTMLInputElement;
 
    if (fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      const reader = new FileReader();
 
      reader.onload = () => {
        this.profileImageUrl = reader.result as string;
 
        // Call a method to save the image to the server
        // Implement the method.
        // this.saveImageToServer(selectedFile);
      };
 
      reader.readAsDataURL(selectedFile);
    }
  }
}