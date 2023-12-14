import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Student, Team } from '../dataClasses';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  @Input() info: any;
  @Input() type: string = '';
  @Input() modalId: string = '';
  @Output() statusChanged: EventEmitter<string> = new EventEmitter<string>();

  updateStatus(newStatus: string): void {
    this.info.status = newStatus;
    this.statusChanged.emit(this.info.status); // Emit the updated status
  }

  constructor(private data: DataService){}


}
