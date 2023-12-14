import { Component, Input } from '@angular/core';


@Component({
  selector: 'request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.css']
})
export class RequestCardComponent {
  @Input() request: any;
  @Input() modalId: string ='';
  @Input() screenSize: string = 'large';

  updateStatus(newStatus: string): void {
    this.request.status = newStatus;
  }

}
