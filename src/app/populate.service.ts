import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Auth } from '@angular/fire/auth';
import { Admin, Mentor, Student } from './dataClasses';

@Injectable({
  providedIn: 'root',
})
export class PopulateService {
  constructor(private afData: DataService, private afAuth: Auth) {}

  // create the account upon successful sign up
  populateDatabase(params: any): void {
    this.afData.createAccount(params)
  }
  // get the current user data
  async retrieveUser(_type: string | null, uid: string): Promise<Student | Mentor | Admin | null> {
    try {
      const data = await this.afData.getUserData(_type, uid);
      return data;
    }
    catch (error) {
      console.error(error);
      return null;
    }
  }
}
