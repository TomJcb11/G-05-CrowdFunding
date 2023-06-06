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
  getOneProject(nom_projet: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${nom_projet}`);
  }
  deleteProjet(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  updateProject(nom_projet: string, project: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/modify/${nom_projet}`, project);
  }
  createProject(project: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/createproject`, project);
  }

}
