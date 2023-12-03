import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Capstone Comrades';
  description: string = 'Your best destination to form or join your Capstone Project Team'
  pastProjects: string[] = ["Project 1", "Project 2", "Project 3", "Project 4"]
  
}
