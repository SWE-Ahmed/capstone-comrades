import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-show-requests',
  templateUrl: './show-requests.component.html',
  styleUrls: ['./show-requests.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ShowRequestsComponent {
  allrequests: any[] = [];
  visibleCardCount = 6;
  showMore = true; 

  constructor(private cardService: CardService) {}


  ngOnInit(): void {
    this.cardService.getRequests().subscribe((data) => {
      this.allrequests = data;
      this.updateVisibleCards();
    });
  }

  showMoreCards() {
    this.visibleCardCount += 6; 
    this.updateVisibleCards();
  }

  private updateVisibleCards() {
    this.showMore = this.visibleCardCount < this.allrequests.length;
  }

}
