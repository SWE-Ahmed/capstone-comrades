import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2, private eventService: EventService) {
  }
  ngOnInit(): void {
    this.eventService.eventEmitter.subscribe((data: any) => {
      // Handle the emitted event here from the child component
      document.querySelector('#sidebar')!.classList.toggle('collapsed');
    });
  }

  defaultSideBar: any = [
    {
      name: 'Terms',
      path: 'terms',
    },
    {
      name:'Students',
      path: 'students',
    },
    {
      name: 'Mentors',
      path: 'mentors',
    },
    {
      name: 'Timeline',
      path: 'timeline',
    },
    {
      name: 'Announcements',
      path: 'announcements',
    },
    {
      name: 'Reports',
      path: 'reports',
    },
    {
      name: 'Term Settings',
      path: 'termSettings'
    }
  ]
  // get the sidebar component using DOM
}