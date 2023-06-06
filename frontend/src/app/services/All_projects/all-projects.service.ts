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
  updateProject(data:any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/modify/${data.nom_projet}`, data);
  }
  createProject(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/createproject`, data);
  }

}
