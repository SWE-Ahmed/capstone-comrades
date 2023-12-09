
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private readonly teamsjson = 'assets/teams.json';
  private readonly studentsjson = 'assets/students.json';
  private readonly requestsjson = 'assets/requests.json';
  private readonly projectsjson = 'assets/projects.json';

  constructor(private http: HttpClient) {}

  getStudentCards(): Observable<any[]> {
    return this.http.get<any[]>(this.studentsjson);
  }

  getTeamCards(): Observable<any[]> {
    return this.http.get<any[]>(this.teamsjson);
  }

  getRequests(): Observable<any[]> {
    return this.http.get<any[]>(this.requestsjson);
  }

  getPastProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.projectsjson);
  }

}
