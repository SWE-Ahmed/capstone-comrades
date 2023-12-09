import { Component } from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {
  project = {
    "name": "Tech Titans",
    "titlePicture": "tech-titans.png",
    "members": "Mentor: No Mentor | Leader: Ahmed Almohammed | Members: Ali Alqutayfi, Daniel Alsadiq, Abdulmohseen AlAli, Hassan Alsyahah",
    "pictures": [
      "tech-titans.png",
      "tech-titans.png",
      "tech-titans.png",
      "tech-titans.png",
      "tech-titans.png"
    ],
    "extraInformation": "This is a tech titans group dedicated to advancing technology and innovation.",
    "about": "Welcome to Tech Titans! We're a team of developers, designers, and project managers passionate about creating a seamless platform for students to connect and form teams for their final year projects. Our goal is to simplify the team formation process, so students can focus on their projects and achieve academic success."
  }
  
  
}
