import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-view-my-team',
  templateUrl: './view-my-team.component.html',
  styleUrls: ['./view-my-team.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ViewMyTeamComponent implements OnInit {
  cards: any[] = [];
  visibleCardCount = 6;
  showMore = true;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getStudentCards().subscribe((data) => {
      this.cards = data;
    });
  }


  isSidenavVisible: boolean = false;

  toggleSidenav() {
    this.isSidenavVisible = !this.isSidenavVisible;
  }
  
}
