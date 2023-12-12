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
  retrieveUser(_type: string | null, uid: string): Student | Mentor | Admin | null {
    let data: Student | Mentor | Admin | null = null;
    this.afData.getUserData(_type, uid).then((data: Student | Mentor | Admin) => {
      data =  data;
    })
    .catch((error) => {
      console.log(error);
    })
    return data;
  }
}
