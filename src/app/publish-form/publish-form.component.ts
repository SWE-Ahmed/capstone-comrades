import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-publish-form',
  templateUrl: './publish-form.component.html',
  styleUrls: ['./publish-form.component.css']
})
export class PublishFormComponent {
  fileInputs: HTMLInputElement[] = [];
  selectedImages: (string | ArrayBuffer | null)[] = [];
  name: any;
  textFieldValue: string = '';
  
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  
  ngAfterViewInit(): void {
    for (let i = 1; i <= 4; i++) {
      const fileInput = this.renderer.selectRootElement(`#image${i}`);
      this.fileInputs.push(fileInput);
      this.selectedImages.push(null);
    }
  }
  
  openFileInput(index: number): void {
    const fileInput = this.fileInputs[index];
    if (fileInput) {
      fileInput.click();
    }
  }
  
  onImageSelected(event: any, index: number): void {
    if (event && event.target && event.target.files) {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          if (e && e.target) {
            this.selectedImages[index] = e.target.result as string;
          }
        };
  
        reader.readAsDataURL(file);
      }
    }
  } 
}
