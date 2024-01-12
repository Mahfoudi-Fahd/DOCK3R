import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Competition } from '../../models/competition';
import { Member } from '../../models/member';
import { Ranking } from '../../models/ranking';
import { Hunting } from '../../models/hunting';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private apiUrl = 'http://localhost:8081/api/v1/competitions';

  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(`${this.apiUrl}/all`).pipe(
      map((res: any) => res.data)
    );
  }

  addCompetition(competition: Competition): Observable<Competition> {
    return this.http.post<Competition>(`${this.apiUrl}/save`, competition, httpOptions);
  }

  getCompetition(code: string): Observable<Competition> {
    const url = `${this.apiUrl}/code/${code}`;
    return this.http.get<Competition>(url);
    
  }

  getParticipants(code: string): Observable<Member[]> {
    const url = `${this.apiUrl}/participants/${code}`;
    return this.http.get<Member[]>(url).pipe(
      map((res: any) => res.data)
    );
  }


  getMembersNotInCompetition(code: string): Observable<Member[]> {
    const url = `${this.apiUrl}/participants/not/${code}`;
    return this.http.get<Member[]>(url).pipe(
      map((res: any) => res.data)
  )
  }

  addParticipant(ranking: Ranking): Observable<Member> {
    const url = `http://localhost:8081/api/v1/rankings/save`;
    return this.http.post<Member>(url, ranking, httpOptions);
  }
  
  addHunting(hunting: Hunting): Observable<Member> {
    const url = `http://localhost:8081/api/v1/hunting/save`;
    return this.http.post<Member>(url, hunting, httpOptions);
  }
}
