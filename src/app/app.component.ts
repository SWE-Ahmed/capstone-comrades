import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Capstone Comrades';
  description: string = 'A team formation platform for the Capstone Project at KFUPM'
  pastProjects: string[] = ["Project 1", "Project 2", "Project 3", "Project 4"]
}
