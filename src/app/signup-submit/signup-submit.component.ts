import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup-submit',
  templateUrl: './signup-submit.component.html',
  styleUrls: ['./signup-submit.component.css'],
})
export class SignupSubmitComponent {
  constructor(private router: Router, private auth: AuthService) {}

  @Input() showFirstToggle: boolean = false;
  @Output() updateView = new EventEmitter<boolean>();

  popup: boolean = false;

  closePopup(email: string, password: string): void {
    this.popup = false;
    console.log(email, password);
    this.auth.signUp(email, password);
  }

  goBack(): void {
    this.updateView.emit(!this.showFirstToggle);
  }

  checkPassword(password: string, passwordConfirm: string) {
    if (password === passwordConfirm) {
      this.popup = true;
    } else {
      //TODO: show an erro message for the user about the problem and ask him to fix
    }
  }
}
