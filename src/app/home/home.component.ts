import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {

  let mediaQuery = window.matchMedia("(max-width: 991px)"); // Adjust the breakpoint as per your needs

  this.toggleElementVisibility(mediaQuery); // Initial invocation

  mediaQuery.addListener(this.toggleElementVisibility);
  }
  title: string = 'Capstone Comrades';
  description: string = 'Your best destination to form or join your Capstone Project Team'
  pastProjects: string[] = ["Project 1", "Project 2", "Project 3", "Project 4"]

  toggleElementVisibility(mq: any) {
    let elem = document.getElementById("navbarSupportedContent")!;
    let myElement = document.getElementById("myElement");

    if (mq.matches) {
      if (!myElement) {
        elem.innerHTML += '<div class="navbar-collapse justify-content-center" id="myElement"><form class="d-flex"><input class="form-control me-2" type="search" placeholder="Write a project\'s name" aria-label="Search"><button class="btn btn-outline-success" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg></button><a class="link-secondary" href="#"><img class="ms-1"src="assets\\tune.svg" alt=""></a></form></div>';
      }
    } else {
      if (myElement) {
        myElement.remove();
      }
    }
  }
}
