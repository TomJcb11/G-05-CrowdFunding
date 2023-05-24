import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allProjects } from '../../shared/models/allProjects_models';
import { oneProject } from '../../shared/models/oneProjects_models';
@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private _apiUrl = 'http://localhost:8080/api/projects';

  get apiUrl() {
    return this._apiUrl;
  }

  constructor(private http: HttpClient) { }

  searchProject(search:string){
    //return this.getProject().filter((project: { nomOdd: any; })=>project.nomOdd)
  }
  getData(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/odd`);
  }
  getProjectFromOdd(name:string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/odd/${name}`);
  }
  getProjets(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getProject(){
    return this.http.get<allProjects[]>(this.apiUrl);
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
