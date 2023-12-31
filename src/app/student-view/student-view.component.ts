import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { DataService } from '../data.service';
import { Student } from '../dataClasses';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class StudentViewComponent implements OnInit {
  cards: any[] = [];
  visibleCardCount = 6;
  showMore = true;

  constructor(private cardService: CardService, private data: DataService) {}

  ngOnInit(): void {
    this.cardService.getStudentCards().subscribe(async (data) => {
      // resolve the promise and populate the studentList
      let studentList: Student[] = [];
      try {
        studentList = await this.data.getAllStudents();
      }
      catch (error) {
        console.error(error);
      }
      this.cards = studentList;
      this.updateVisibleCards();
    });
  }

  showMoreCards() {
    this.visibleCardCount += 6;
    this.updateVisibleCards();
  }

  private updateVisibleCards() {
    this.showMore = this.visibleCardCount < this.cards.length;
  }
}
