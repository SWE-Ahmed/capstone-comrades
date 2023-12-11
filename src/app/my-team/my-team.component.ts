import { Component, Input } from '@angular/core';
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
export class MyTeamComponent {
  cards: any[] = [];
  @Input() showKebabMenu:boolean = true;
  visibleCardCount = 6;
  showMore = true;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getStudentCards().subscribe((data) => {
      this.cards = data;
    });
  } 
}