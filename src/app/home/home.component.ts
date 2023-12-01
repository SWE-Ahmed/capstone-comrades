import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = 'Capstone Comrades';
  description: string = 'Your best destination to form or join your Capstone Project Team'
  pastProjects: string[] = ["Project 1", "Project 2", "Project 3", "Project 4"]
}
