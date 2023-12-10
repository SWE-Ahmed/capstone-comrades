import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  projects: any[] = [];
  project: any;
  projectId: number=0;

  constructor(private route: ActivatedRoute, private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getPastProjects().subscribe((data) => {
      this.projects = data;
      this.route.params.subscribe(params => {
        this.projectId = +params['projectId'];
        console.log(this.projectId);
        this.project = this.findProjectById(this.projectId);
      });
    });
  }
  

  findProjectById(id: number): any {
    return this.projects.find(project => project.id === id);
  }
  
}
