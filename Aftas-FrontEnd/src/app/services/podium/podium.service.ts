import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PodiumService {

  constructor(private http: HttpClient) { }

  private podiumUrl = 'http://localhost:8081/api/v1/competition/';


  getPodium(code: string) {
    return this.http.get(`${this.podiumUrl}${code}/podium`);
  }
}
