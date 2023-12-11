import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  toggleSidebar() {
    const sidebar = this.elRef.nativeElement.querySelector('#sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  }

}