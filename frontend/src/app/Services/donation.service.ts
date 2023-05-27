import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private baseUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  getStats(nom_projet: string): Observable<any> {
    const url = `${this.baseUrl}/api/${nom_projet}/Donation`;
    return this.http.get(url);
  }
  
  submitDonation(nom_projet: string, id_ut: number, data: any): Observable<any> {
    const url = `${this.baseUrl}/api/donation/send/${nom_projet}/${id_ut}`;
    return this.http.post(url, data);
  }
}
