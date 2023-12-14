import { Component, Input } from '@angular/core';
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

  constructor(private data: DataService){}


}
