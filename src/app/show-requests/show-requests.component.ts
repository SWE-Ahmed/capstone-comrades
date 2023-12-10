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
  filteredrequests: any[] = [];
  visibleCardCount = 6;
  showMore = true; 
  selectedType: string = 'All';

  constructor(private cardService: CardService) {}


  ngOnInit(): void {
    this.cardService.getRequests().subscribe((data) => {
      this.allrequests = data;
      this.updateFilteredRequests();
      this.updateVisibleCards();
    });
  }

  showMoreCards() {
    this.visibleCardCount += 6; 
    this.updateVisibleCards();
  }

  changeStatusFilter(type: string) {
    this.selectedType = type;
    this.visibleCardCount = 6;
    this.updateFilteredRequests();
    this.updateVisibleCards();
  }


  private updateFilteredRequests() {
    if (this.selectedType === 'All') {
      this.filteredrequests = this.allrequests;
    } else {
      this.filteredrequests = this.allrequests.filter(
        (request) => request.type === this.selectedType
      );
    }
  }
  private updateVisibleCards() {
    if (this.selectedType === 'All') {
      this.showMore = this.visibleCardCount < this.allrequests.length;
    } else {
      this.showMore = this.visibleCardCount < this.filteredrequests.length;
    }
  }
}