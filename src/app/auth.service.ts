import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {sendEmailVerification} from 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  private authenticated: boolean = false;

  // sign up method for new users
  signUp(email: string, password: string): void {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Sign up successful
        this.router.navigate([''])
      })
      .catch((error) => {
        // An error occurred
      });
  }
  // sign in method for existing users
  signIn(email: string, password: string): void {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        // Login successful
        this.authenticated = true;
        this.router.navigate(['profile'])
      })
      .catch((error) => {
        // An error occurred
        console.log(error)
      });
  }
  // sign out method
  signOut(){
    this.afAuth.signOut()
    .then(() => {
      // Sign Out successful
      this.authenticated = false;
      this.router.navigate(['']);
    })
    .catch((error) => {
      // An error occured
      console.log(error)
    });
}
  // get authentication status
  isAuthenticated(): boolean {
    return this.authenticated;
  }
  // create profile document
  createProfile(accountDetails: any): void {
  }
}
