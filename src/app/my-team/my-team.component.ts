import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { CardService } from '../services/card.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MyTeamComponent implements AfterViewInit,OnInit{
  @Input() showKebabMenu:boolean = true;
  @Input() teamExist:boolean=true;

  constructor(private cardService: CardService,private renderer: Renderer2, private el: ElementRef) {}

  cards: any[] = [];
  visibleCardCount = 6;

  ngOnInit(): void {
    this.cardService.getStudentCards().subscribe((data) => {
      this.cards = data;
    });
  } 

  fileInput: HTMLInputElement | undefined;
  selectedImage: string | ArrayBuffer | null = null;
  name: any;
  textFieldValue: string = '';

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