import { Component, Input } from '@angular/core';

@Component({
  selector: 'past-project-card',
  templateUrl: './past-project-card.component.html',
  styleUrls: ['./past-project-card.component.css']
})
export class PastProjectCardComponent {
  @Input() info: any;
  // info = {name:"potato",imageSrc:"xgorve.png",link:"pastprojects/xgorve"}
}
