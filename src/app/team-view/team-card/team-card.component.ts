import { Component,Input, OnInit} from '@angular/core';

@Component({
  selector: 'team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})

export class TeamCardComponent{
  @Input() card: any;

}