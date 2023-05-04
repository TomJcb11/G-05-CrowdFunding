import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  constructor(private http: HttpClient) { }
  getData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/odd');
  }
  getProjectFromOdd(nomOdd: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/${nomOdd}`);
  }

  getProject(){
    return this.http.get(`http://localhost:8080/api/project`);
  }
  getOneProject(id: string | null): Observable<any> {
    const url = `http://localhost:8080/api/project/${id ?? ''}`;
    return this.http.get<any>(url);
}
  
  
  

  
}

