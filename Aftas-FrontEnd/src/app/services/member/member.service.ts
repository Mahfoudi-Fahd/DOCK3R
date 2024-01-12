import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Member } from '../../models/member';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private membersUrl = 'http://localhost:8081/api/v1/members';

  constructor(private http: HttpClient) { }


  getMembers(): Observable<Member[]>{
    return this.http.get<Member[]>(`${this.membersUrl}/all`).pipe(
        map((res: any) => res)
        
    )
  }


  addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(`${this.membersUrl}/save`, member, httpOptions);
  }


  searchByCriteria(criteria: string): Observable<Member[]> {
    const url = `${this.membersUrl}/${criteria}`;
    return this.http.get<Member[]>(url).pipe(
      map((res: any) => res)
  )
  }

 
}
