import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fish } from '../../models/fish';
import { Observable, map } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(private http: HttpClient) { }
  private fishesUrl = 'http://localhost:8081/api/v1/fish';


  getFishes(): Observable<Fish[]>{
    return this.http.get<Fish[]>(`${this.fishesUrl}/all`).pipe(
        map((res: any) => res)
        
    )
  } 
}
