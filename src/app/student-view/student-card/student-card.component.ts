import { Component, Input } from '@angular/core';

@Component({
  selector: 'student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
  @Input() card: any;
  @Input() showKebabMenu: boolean = false;
  @Input() modalId: string ='';

}
