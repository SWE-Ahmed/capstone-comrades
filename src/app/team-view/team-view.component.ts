import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CardService } from "src/app/services/card.service"
import { DataService } from '../data.service';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class TeamViewComponent implements OnInit {
  allCards: any[] = [];
  visibleCardCount = 9;
  showMore = true;

  constructor(private cardService: CardService, private data: DataService) {}

  async ngOnInit(): Promise<void> {
    this.allCards = await this.data.getAllTeams();
    this.updateVisibleCards();
  }


  // onSearch(query: string): void {
  //   this.cardService.searchCards(query).subscribe((filteredCards) => {
  //     this.allCards = filteredCards;
  //     this.updateVisibleCards();
  //   });
  // }

  showMoreCards() {
    this.visibleCardCount += 6;
    this.updateVisibleCards();
  }

  private updateVisibleCards() {
    this.showMore = this.visibleCardCount < this.allCards.length;
  }
}

