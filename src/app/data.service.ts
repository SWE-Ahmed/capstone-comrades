import { Injectable } from '@angular/core';
import {
  Firestore,
  setDoc,
  doc,
  getDoc,
  DocumentSnapshot,
  getDocs,
  collection,
  QuerySnapshot,
} from '@angular/fire/firestore';
import {
  Admin,
  Mentor,
  Student,
  adminConvertor,
  mentorConvertor,
  studentConvertor,
} from './dataClasses';

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
    // prepare for writing data to the database
    this.collectionName = accountDetails.accountType;
    this.docId = accountDetails.id;
    let data: any = {};
    // create the correct instance of the class and prepare it for writing
    switch (this.collectionName) {
      case 'Student': {
        data = studentConvertor.toFirestore(
          new Student(
            {
              firstName: accountDetails.firstName,
              lastName: accountDetails.lastName,
            },
            accountDetails.accountType,
            accountDetails.phoneNumber,
            accountDetails.email,
            this.docId,
            '',
            '',
            '',
            '',
            '',
            ''
          )
        );
        break;
      }
      case 'Mentor': {
        data = mentorConvertor.toFirestore(
          new Mentor(
            '',
            '',
            '',
            {
              firstName: accountDetails.firstName,
              lastName: accountDetails.lastName,
            },
            accountDetails.email,
            this.docId
          )
        );
        break;
      }
      case 'Admin': {
        data = adminConvertor.toFirestore(
          new Admin(
            '',
            {
              firstName: accountDetails.firstName,
              lastName: accountDetails.lastName,
            },
            accountDetails.email,
            this.docId
          )
        );
        break;
      }
    }
    // write the prepared data to the database
    await setDoc(doc(this.firestore, this.collectionName, this.docId), data);
    console.log('Account created with ID: ', this.docId);
  }
  // getting user data from UID
  async getUserData(
    _type: string | null,
    uid: string
  ): Promise<Student | Mentor | Admin> {
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
  // edit the profile of the user in the database
  async editProfileRemote(
    accountDetails: any,
    currentUser: any
  ): Promise<void> {
    // preparing the values for writing
    let updatedValues: any = {
      ...studentConvertor.toFirestore(currentUser),
      ...accountDetails,
    };
    updatedValues['name'] = {
      firstName: updatedValues['firstName'],
      lastName: updatedValues['lastName'],
    };
    delete updatedValues['firstName'];
    delete updatedValues['lastName'];
    // writing the values to the database
    await setDoc(doc(this.firestore, 'Student', currentUser.id), updatedValues);
    console.log('Account info updated with ID: ', currentUser.id);
  }
  // get all the student accounts from the database
  async getAllStudents(): Promise<Student[]> {
    let studentList: Student[] = [];
    await getDocs(collection(this.firestore, 'Student')).then((querySnapshot: QuerySnapshot) => {
      querySnapshot.docs.forEach((doc: DocumentSnapshot) => {
        studentList.push(studentConvertor.fromFirestore(doc, {}));
      });
    })
    return studentList;
  }
}
