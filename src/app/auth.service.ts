import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, User, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut} from '@angular/fire/auth';
import { Subscription } from 'rxjs/internal/Subscription';
import { Admin, Mentor, Student } from './dataClasses';
import { PopulateService } from './populate.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private afAuth: Auth,
    private popul8: PopulateService
  ) {
    // listen for auth changes throughout the program and adjust accordingly
    this.authStateSubscription = this.authState$.subscribe(async (user: User | null) => {
      if (user !== null) {
        this.authenticated = true;
        this.currentUser = await this.popul8.retrieveUser(user.displayName, user.uid);
      }
      else {
        this.authenticated = false;
      }
  })
  }
  private authState$ = authState(this.afAuth);
  private authStateSubscription: Subscription;
  private authenticated: boolean = false;
  private currentUser!: Student | Mentor | Admin | null;

  // sign up method for new users
  signUp(params: any): void {
    createUserWithEmailAndPassword(this.afAuth, params.email, params.password)
      .then((user) => {
        // Sign up successful, need to Sign out
        this.signOut()
        // use the same auto-generated uid for creation of document
        params.id = user.user.uid;
        // store USERTYPE in DISPLAYNAME property
        updateProfile(user.user, {
          displayName: params.accountType
        }).then(() => {
          this.popul8.populateDatabase(params);
          this.router.navigate(['']);
        }).catch((error) => {
          // An error occurred
          console.log(error);
        })
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
      });
      // store the user in the database
  }
  // sign in method for existing users
  signIn(email: string, password: string): void {
    signInWithEmailAndPassword(this.afAuth, email, password)
      .then(() => {
        // Login successful
        this.router.navigate(['profile']);
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
      });
  }
  // sign out method
  signOut() {
    signOut(this.afAuth)
      .then(() => {
        // Sign Out successful
        this.router.navigate(['']);
      })
      .catch((error) => {
        // An error occured
        console.log(error);
      });
  }
  // get authentication status
  isAuthenticated(): boolean {
    return this.authenticated;
  }
  // get current user
  getCurrentUser(): Student | Mentor | Admin | null {
    return this.currentUser;
  }
}
