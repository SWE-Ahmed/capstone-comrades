import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-signup-submit',
  templateUrl: './signup-submit.component.html',
  styleUrls: ['./signup-submit.component.css']
})
export class SignupSubmitComponent {
  isLargeScreen: boolean = true;  // Default to true for larger screens


  constructor(private router: Router, private auth: AuthService,private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe(result => {
      this.isLargeScreen = !result.matches;
    });
  }

  @Input() params: any;
  @Output() updateView = new EventEmitter <boolean> ();

  popup: boolean = false;

  closePopup(): void {
    this.popup = false;
    console.log(this.params)
    this.auth.signUp(this.params)
  }

  goBack(): void {
    this.updateView.emit(!this.params.showFirst)
  }
}
