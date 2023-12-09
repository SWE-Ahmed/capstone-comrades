import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-past-projects-view',
  templateUrl: './past-projects-view.component.html',
  styleUrls: ['./past-projects-view.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class PastProjectsViewComponent implements OnInit {
  cards: any[] = [];
  visibleCardCount = 12;
  showMore = true;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getPastProjects().subscribe((data) => {
      this.cards = data;
      this.updateVisibleCards();
    });
  }

  showMoreCards() {
    this.visibleCardCount += 8; 
    this.updateVisibleCards();
  }

  private updateVisibleCards() {
    this.showMore = this.visibleCardCount < this.cards.length;
  }
}