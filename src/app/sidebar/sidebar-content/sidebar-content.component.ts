import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { EventService } from '../../event.service';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.css']
})
export class SidebarContentComponent {
  constructor(private eventService: EventService) {}
  @Output() sidebarParentUpdate:EventEmitter<string>= new EventEmitter();
  toggleSidebar() {
    this.emitEvent()
  }
  emitEvent(): void {
    this.eventService.emitEvent({});
  }
}