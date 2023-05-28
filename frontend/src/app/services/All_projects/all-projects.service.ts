import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private _apiUrl = 'http://localhost:8080/api/projects';

  get apiUrl() {
    return this._apiUrl;
  }

  constructor(private http: HttpClient) { }

  getProjets(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getOneProject(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  deleteProjet(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  updateProject(id: number, project: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/modify/${id}`, project);
  }
  
}
