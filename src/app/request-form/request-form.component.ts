import { AfterViewInit,Renderer2, Component , ElementRef,ViewChild} from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements AfterViewInit{
  fileInput: HTMLInputElement | undefined;
  selectedImage: string | ArrayBuffer | null = null;
  name: any;
  textFieldValue: string = '';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.fileInput = this.renderer.selectRootElement('#imageInput');
    console.log(this.fileInput);

  }
  openFileInput(): void {
    if(this.fileInput) {
      this.fileInput.click();
    }
  }


  onImageSelected(event: any): void {
    if (event && event.target && event.target.files) {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          if (e && e.target) {
            this.selectedImage = e.target.result as string;
          }
        };
  
        reader.readAsDataURL(file);
      }
    }
  }  
}
