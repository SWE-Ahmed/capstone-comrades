import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Auth } from '@angular/fire/auth';
import { Admin, Mentor, Student, Team } from './dataClasses';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PopulateService {
  constructor(private data: DataService,  private router: Router) {}

  // create the account upon successful sign up
  populateDatabase(params: any): void {
    this.data.createAccount(params)
  }
  // get the current user data
  async retrieveUser(_type: string | null, uid: string): Promise<Student | Mentor | Admin | null> {
    try {
      const data = await this.data.getUserData(_type, uid);
      return data;
    }
    catch (error) {
      console.error(error);
      return null;
    }
  }
  // Create the new team under the user
  createMyTeam(teamDetails: any, user: Student): void {
    // create the team in the database
    // update the user account with the new team
    this.data.createTeam(teamDetails, user);
    // refresh page with new team loaded
    this.router.navigate(['myteam']);
  }
  // retreive the team of the current user
  async retrieveTeam(studentId: string): Promise<Team> {
    try {
      const data = await this.data.getTeamStudent(studentId);
      return data;
    }
    catch (error) {
      throw new Error('Error in retreiving team')
    }
  }
  // retreive the students of a team
  async retrieveStudentsTeam(teamId: string): Promise<Student[]> {
    try {
      const data = await this.data.getStudentsTeam(teamId);
      return data;
    }
    catch (error) {
      throw new Error('Error in retreiving team')
    }
  }
}
