import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import {
  Firestore,
  setDoc,
  doc,
  getDoc,
  DocumentSnapshot,
  getDocs,
  collection,
  QuerySnapshot,
  query,
  where,
} from '@angular/fire/firestore';
import {
  Admin,
  Mentor,
  Student,
  Team,
  adminConvertor,
  mentorConvertor,
  studentConvertor,
  teamConvertor,
} from './dataClasses';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  // create a user profile as a document from the given data
  // using setDoc to provide custom UID
  async createAccount(accountDetails: any): Promise<void> {
    // prepare for writing data to the database
    const collectionName = accountDetails.accountType;
    const docId = accountDetails.id;
    let data: any = {};
    // create the correct instance of the class and prepare it for writing
    switch (collectionName) {
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
            docId,
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
            docId
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
            docId
          )
        );
        break;
      }
    }
    // write the prepared data to the database
    await setDoc(doc(this.firestore, collectionName, docId), data);
    console.log('Account created with ID: ', docId);
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
    let updatedValues: any;
    // if the accountDetals are {}
    if (typeof accountDetails !== typeof '') {
      updatedValues = {
        ...studentConvertor.toFirestore(currentUser),
        ...accountDetails,
      };
      updatedValues['name'] = {
        firstName: updatedValues['firstName'],
        lastName: updatedValues['lastName'],
      };
      delete updatedValues['firstName'];
      delete updatedValues['lastName'];
      // if the accountDetails are ""
    } else {
      updatedValues = studentConvertor.toFirestore(currentUser);
      updatedValues['team'] = accountDetails;
    }
    // writing the values to the database
    await setDoc(doc(this.firestore, 'Student', currentUser.id), updatedValues);
    console.log('Account info updated with ID: ', currentUser.id);
  }
  // get student accounts from the database
  async getAllStudents(condition?: string): Promise<Student[]> {
    let studentList: Student[] = [];
    if (condition) {
      await getDocs(
        query(
          collection(this.firestore, 'Student'),
          where('team', '==', condition)
        )
      ).then((querySnapshot: QuerySnapshot) => {
        querySnapshot.docs.forEach((doc: DocumentSnapshot) => {
          studentList.push(studentConvertor.fromFirestore(doc, {}));
        });
      });
    } else {
      await getDocs(collection(this.firestore, 'Student')).then(
        (querySnapshot: QuerySnapshot) => {
          querySnapshot.docs.forEach((doc: DocumentSnapshot) => {
            studentList.push(studentConvertor.fromFirestore(doc, {}));
          });
        }
      );
    }
    return studentList;
  }
  // Create new team and add it to the database
  async createTeam(teamDetails: any, currentUser: Student): Promise<void> {
    // prepare for writing data to the database
    const collectionName = 'Team';
    const docId = uuid();
    const teamDoc = {
      ...teamDetails,
      ...{
        status: 'active',
        id: docId,
        majors: [''],
        project: docId,
        term: '',
        mentor: '',
      },
    };
    // write the prepared data to the database
    await setDoc(doc(this.firestore, collectionName, docId), teamDoc);
    console.log('Team created with ID: ', docId);
    this.editProfileRemote(teamDetails.id, currentUser);
  }
  // retireve team from student
  async getTeamStudent(studentId: string): Promise<Team> {
    // resolve the promise and return a casted document data
    const snapshot = await getDoc(doc(this.firestore, 'Student', studentId));

    // if exists return the team
    if (snapshot.exists()) {
      const teamDocId: string = studentConvertor.fromFirestore(
        snapshot,
        {}
      ).team;
      const snapshot2 = await getDoc(doc(this.firestore, 'Team', teamDocId));
      if (snapshot2.exists()) {
        return teamConvertor.fromFirestore(snapshot2, {});
      } else {
        throw new Error('Error in loading team');
      }
    } else {
      throw new Error('Error in loading team');
    }
  }
  // retreive students from team
  async getStudentsTeam(teamId: string): Promise<Student[]> {
    // resolve the promise and return a casted document data
    const snapshot = await getDoc(doc(this.firestore, 'Team', teamId));

    // if exists then return students
    if (snapshot.exists()) {
      let studentList: Student[] = [];
      return this.getAllStudents(teamId);
    } else {
      throw new Error('Error loading team');
    }
  }
  async getAllTeams(condition?: string): Promise<Team[]> {
    let teamList: Team[] = [];
    if (condition) {
      await getDocs(
        query(
          collection(this.firestore, 'Team'),
          where('team', '==', condition)
        )
      ).then((querySnapshot: QuerySnapshot) => {
        querySnapshot.docs.forEach((doc: DocumentSnapshot) => {
          teamList.push(teamConvertor.fromFirestore(doc, {}));
        });
      });
    } else {
      await getDocs(collection(this.firestore, 'Team')).then(
        (querySnapshot: QuerySnapshot) => {
          querySnapshot.docs.forEach((doc: DocumentSnapshot) => {
            teamList.push(teamConvertor.fromFirestore(doc, {}));
          });
        }
      );
    }
    return teamList;
  }
  // get student names in a team
  async getStudentNames(team: Team): Promise<string[]> {
    let studentNames: string[] = [];

    (await this.getStudentsTeam(team.id)).forEach((student: Student) => {
      studentNames.push(student.name.firstName + ' ' + student.name.lastName);
    });
    return studentNames;
  }
}
