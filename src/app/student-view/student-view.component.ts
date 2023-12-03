import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  cards: any[] = [];
  visibleCardCount = 6; // Number of cards initially visible
  showMore = true; // Toggle "Show more" button

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getStudentCards().subscribe((data) => {
      this.cards = data;
      this.updateVisibleCards();
    });
  }

  showMoreCards() {
    this.visibleCardCount += 6; // Show 6 more cards
    this.updateVisibleCards();
  }

  private updateVisibleCards() {
    this.showMore = this.visibleCardCount < this.cards.length; // Toggle "Show more" button
  }
}
