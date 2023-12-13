import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  constructor(private auth: AuthService) {}
  placeholder = "Search";
  tempSignOut(): void {
    this.auth.signOut();
  }
}

