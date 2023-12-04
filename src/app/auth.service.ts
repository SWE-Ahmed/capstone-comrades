import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  // sign up method for new users
  signUp(email: string, password: string) {
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
  signIn(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        // Login successful
        this.router.navigate(['profile'])
      })
      .catch((error) => {
        // An error occurred
      });
  }
}
