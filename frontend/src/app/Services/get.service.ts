import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { allProjects } from '../shared/models/allProjects_models';
import { oneProject } from '../shared/models/oneProjects_models';




@Injectable({
  providedIn: 'root'
})
export class GetService {
  private apiURL = "http://localhost:8080/api"
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

  getProject(){
    return this.http.get<allProjects[]>(`http://localhost:8080/api/project`);
  }
  getOneProject(name: string | null): Observable<any> {
    const url = `http://localhost:8080/api/project/${name}`;
    return this.http.get<any>(url);
}





}

