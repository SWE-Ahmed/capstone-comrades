import {
  DocumentSnapshot,
  SnapshotOptions,
  Timestamp,
} from 'firebase/firestore';

export class Student {
  email: string;
  name: Map<string, string>;
  type: string;
  id: string;
  phoneNumber: string;
  constructor(
    name: Map<string, string>,
    type: string,
    email: string,
    phoneNumber: string,
    id: string
  ) {
    this.email = email;
    this.name = name;
    this.type = type;
    this.id = id;
    this.phoneNumber = phoneNumber;
  }
  toString() {
    return (
      this.name +
      ', ' +
      this.email +
      ', ' +
      this.phoneNumber +
      ', ' +
      this.type +
      ', ' +
      this.id
    );
  }
}

export class Profile {
  about: string;
  specialization: string;
  major: string;
  id: string;
  link: [string];
  constructor(
    about: string,
    major: string,
    specialization: string,
    link: [string],
    id: string
  ) {
    this.about = about;
    this.specialization = specialization;
    this.major = major;
    this.id = id;
    this.link = link;
  }
  toString() {
    return (
      this.about +
      ', ' +
      this.major +
      ', ' +
      this.specialization +
      ', ' +
      this.link +
      ', ' +
      this.id
    );
  }
}

export class Admin {
  type: string;
  name:  Map<string, string>;
  email: string;
  id: string;
  constructor(type: string, name:  Map<string, string>, email: string, id: string) {
    this.type = type;
    this.name = name;
    this.email = email;
    this.id = id;
  }
  toString() {
    return (
      this.name + ', ' + this.email + ', ' + this.type + ', ' + this.id
    );
  }
}

export class Request {
  type: string;
  status: string;
  id: string;
  date: Timestamp;
  message: string;
  constructor(
    type: string,
    status: string,
    id: string,
    date: Timestamp,
    message: string
  ) {
    this.type = type;
    this.status = status;
    this.id = id;
    this.date = date;
    this.message = message;
  }
  toString() {
    return (
      this.status +
      ', ' +
      this.type +
      ', ' +
      this.date +
      ', ' +
      this.message +
      ', ' +
      this.id
    );
  }
}

export class Term {
  number: string;
  status: string;
  id: string;
  constructor(number: string, status: string, id: string) {
    this.number = number;
    this.status = status;
    this.id = id;
  }
  toString() {
    return this.number + ', ' + this.status + ', ' + this.id;
  }
}

export class Mentor {
  status: string;
  specialization: string;
  major: string;
  name: Map<string, string>;
  email: string;
  id: string;
  constructor(
    status: string,
    specialization: string,
    major: string,
    name: Map<string, string>,
    email: string,
    id: string
  ) {
    this.status = status;
    this.specialization = specialization;
    this.major = major;
    this.name = name;
    this.email = email;
    this.id = id;
  }
  toString() {
    return (
      this.name +
      ', ' +
      this.email +
      ', ' +
      this.major +
      ', ' +
      this.specialization +
      ', ' +
      this.status +
      ', ' +
      this.id
    );
  }
}

export class Team {
  name: string;
  field: string;
  picture: string;
  about: string;
  status: string;
  id: string;
  constructor(
    name: string,
    field: string,
    picture: string,
    about: string,
    status: string,
    id: string
  ) {
    this.name = name;
    this.field = field;
    this.picture = picture;
    this.about = about;
    this.status = status;
    this.id = id;
  }
  toString() {
    return (
      this.name +
      ', ' +
      this.field +
      ', ' +
      this.picture +
      ', ' +
      this.about +
      ', ' +
      this.status +
      ', ' +
      this.id
    );
  }
}

export class Project {
  about: string;
  title: string;
  id: string;
  picture: string;
  extraInfo: string;
  constructor(
    about: string,
    title: string,
    id: string,
    picture: string,
    extraInfo: string
  ) {
    this.about = about;
    this.title = title;
    this.id = id;
    this.picture = picture;
    this.extraInfo = extraInfo;
  }
  toString() {
    return (
      this.about +
      ', ' +
      this.title +
      ', ' +
      this.id +
      ', ' +
      this.picture +
      ', ' +
      this.extraInfo
    );
  }
}

/**
 *
 * Firestore Converters
 */

export const studentConvertor = {
  toFirestore: (student: Student) => {
    return {
      name: student.name,
      email: student.email,
      phoneNumber: student.phoneNumber,
      type: student.type,
      id: student.id,
    };
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
    const data = snapshot.data(options);
    return new Student(
      data?.['name'],
      data?.['type'],
      data?.['email'],
      data?.['phoneNumber'],
      data?.['id']
    );
  },
};

export const profileConvertor = {
  toFirestore: (profile: Profile) => {
    return {
      about: profile.about,
      specialization: profile.specialization,
      major: profile.major,
      id: profile.id,
      link: profile.link,
    };
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
    const data = snapshot.data(options);
    return new Profile(
      data?.['about'],
      data?.['major'],
      data?.['specialization'],
      data?.['link'],
      data?.['id']
    );
  },
};

export const adminConvertor = {
  toFirestore: (admin: Admin) => {
    return {
      type: admin.type,
      name: admin.name,
      email: admin.email,
      id: admin.id,
    };
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
    const data = snapshot.data(options);
    return new Admin(
      data?.['type'],
      data?.['name'],
      data?.['email'],
      data?.['id']
    );
  },
};

export const requestConvertor = {
  toFirestore: (request: Request) => {
    return {
      type: request.type,
      status: request.status,
      id: request.id,
      date: request.date,
      message: request.message,
    };
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
    const data = snapshot.data(options);
    return new Request(
      data?.['type'],
      data?.['status'],
      data?.['id'],
      data?.['date'],
      data?.['message']
    );
  },
};

export const termConvertor = {
  toFirestore: (term: Term) => {
    return {
      number: term.number,
      status: term.status,
      id: term.id,
    };
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
    const data = snapshot.data(options);
    return new Term(data?.['number'], data?.['status'], data?.['id']);
  },
};

export const mentorConvertor = {
  toFirestore: (mentor: Mentor) => {
    return {
      status: mentor.status,
      specialization: mentor.specialization,
      major: mentor.major,
      name: mentor.name,
      email: mentor.email,
      id: mentor.id,
    };
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
    const data = snapshot.data(options);
    return new Mentor(
      data?.['status'],
      data?.['specialization'],
      data?.['major'],
      data?.['name'],
      data?.['email'],
      data?.['id']
    );
  },
};

export const teamConvertor = {
  toFirestore: (team: Team) => {
    return {
      name: team.name,
      field: team.field,
      picture: team.picture,
      about: team.about,
      status: team.status,
      id: team.id,
    };
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
    const data = snapshot.data(options);
    return new Team(
      data?.['name'],
      data?.['field'],
      data?.['picture'],
      data?.['about'],
      data?.['status'],
      data?.['id']
    );
  },
};

export const projectConvertor = {
  toFirestore: (project: Project) => {
    return {
      about: project.about,
      title: project.title,
      id: project.id,
      picture: project.picture,
      extraInfo: project.extraInfo,
    };
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
    const data = snapshot.data(options);
    return new Project(
      data?.['about'],
      data?.['title'],
      data?.['id'],
      data?.['picture'],
      data?.['extraInfo']
    );
  },
};
