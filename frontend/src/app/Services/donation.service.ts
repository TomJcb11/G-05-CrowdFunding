import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private baseUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  getStats(id_projet: number): Observable<any> {
    const url = `${this.baseUrl}/api/${id_projet}/Donation`;
    return this.http.get(url);
  }
  
  submitDonation(id_projet: number, id_ut: number, data: any): Observable<any> {
    const url = `${this.baseUrl}/api/donation/send/${id_projet}/${id_ut}`;
    return this.http.post(url, data);
  }
}
