// // team-view.component.ts

// import { Component, OnInit } from '@angular/core';
// import { CardService } from 'src/app/services/card.service';

// @Component({
//   selector: 'app-team-view',
//   templateUrl: './team-view.component.html',
//   styleUrls: ['./team-view.component.css']
// })
// export class TeamViewComponent implements OnInit {
//   cards: any[] = [];
//   visibleCardCount = 9; // Number of cards initially visible
//   showMore = true; // Toggle "Show more" button

//   constructor(private cardService: CardService) {}

//   ngOnInit(): void {
//     this.cardService.getCards().subscribe((data) => {
//       this.cards = data;
//     });
//   }

//   showMoreCards() {
//     this.visibleCardCount += 6; // Show 9 more cards
//     this.showMore = this.visibleCardCount < this.cards.length; // Toggle "Show more" button
//   }
// }


// team-view.component.ts

import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {
  allCards: any[] = [];
  visibleCardCount = 9; // Number of cards initially visible
  showMore = true; // Toggle "Show more" button

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getTeamCards().subscribe((data) => {
      this.allCards = data;
      this.updateVisibleCards();
    });
  }
  

  // onSearch(query: string): void {
  //   this.cardService.searchCards(query).subscribe((filteredCards) => {
  //     this.allCards = filteredCards;
  //     this.updateVisibleCards();
  //   });
  // }

  showMoreCards() {
    this.visibleCardCount += 6; // Show 6 more cards
    this.updateVisibleCards();
  }

  private updateVisibleCards() {
    this.showMore = this.visibleCardCount < this.allCards.length; // Toggle "Show more" button
  }
}

