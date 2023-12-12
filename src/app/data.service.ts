import { Injectable } from '@angular/core';
import {
  Firestore,
  setDoc,
  doc,
  getDoc,
  DocumentSnapshot,
} from '@angular/fire/firestore';
import { Admin, Mentor, Student, adminConvertor, mentorConvertor, studentConvertor } from './dataClasses';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  collectionName: string = '';
  docId: string = '';

  // create a user profile as a document from the given data
  // using setDoc to provide custom UID
  async createAccount(accountDetails: any): Promise<void> {
    this.collectionName = accountDetails.accountType;
    this.docId = accountDetails.id;
    await setDoc(doc(this.firestore, this.collectionName, this.docId), {
      name: {
        firstName: accountDetails.firstName,
        lastName: accountDetails.lastName,
      },
      type: accountDetails.accountType,
      phoneNumber: accountDetails.phoneNumber,
      email: accountDetails.email,
      id: this.docId,
    });
    console.log('Account created with ID: ', this.docId);
  }
  // getting user data from UID
  async getUserData(_type: string | null, uid: string): Promise<Student | Mentor | Admin> {
    let collectionName: string = '';
    // determine the collection name
    if (_type !== null) {
      collectionName = _type;
    }
    // resolve the promise and return a casted document data
    const snapshot = await getDoc(doc(this.firestore, collectionName, uid));
    
    if (snapshot.exists()) {
      if (collectionName === 'Student') {
        return studentConvertor.fromFirestore(snapshot, {});
      } else if (collectionName === 'Mentor') {
        return mentorConvertor.fromFirestore(snapshot, {});
      } else {
        return adminConvertor.fromFirestore(snapshot, {});
      }
    } else {
      throw new Error('User not found');
    }
  }
  
}
